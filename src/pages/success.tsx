import Link from "next/link";
import { SuccessContainer, ImageContainer, ImagesContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productsImages: string[]
}

export default function Success({ customerName, productsImages }: SuccessProps) {
  console.log(productsImages)
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex"/>
      </Head>

      <SuccessContainer>
        <ImagesContainer>
        {
          productsImages.map((img, i) => (
          <ImageContainer key={i}>
             <Image src={img} alt="" width={120} height={120}></Image>
          </ImageContainer>
          ))
        }
        </ImagesContainer>
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul!!! <strong>{customerName}</strong>, sua{" "}
          compra de {productsImages.length} {productsImages.length > 1 ? 'camisetas' : 'camiseta'} já está a caminho da sua casa. 
        </p>
        <Link href="/"> Voltar ao catalogo </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product;
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productsImages
    },
  };
};
