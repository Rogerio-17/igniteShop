import Link from "next/link";
import { SuccessContainer, ImageContainer, ImagesContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productsImages: {
    productImage: string,
    quantity: number
  }[]
}

export default function Success({ customerName, productsImages }: SuccessProps) {
  const quantitys = productsImages.map((i) => i.quantity)
  const totalItems = quantitys.reduce((a, b) => a + b, 0) 
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
             <Image src={img.productImage} alt="" width={120} height={120}></Image>
             <h2>{img.quantity}x</h2>
          </ImageContainer>
          ))
        }
        </ImagesContainer>
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul!!! <strong>{customerName}</strong>, sua{" "}
          compra de <strong>{totalItems} </strong>{totalItems > 1 ? 'camisetas' : 'camiseta'} já está a caminho da sua casa. 
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
    return {
      productImage: product.images[0],
      quantity: item.quantity
    }
  })

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
