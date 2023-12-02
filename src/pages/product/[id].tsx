import { GetStaticPaths, GetStaticProps } from "next";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { stripe } from "../../lib/stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    priceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isloading, setIsLoading] = useState(false);

  if (isFallback) {
    return <p>Loading...</p>;
  }

  async function handleBuyProduct() {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.priceId,
      });

      const { checkoutUrl } = response.data;

      // Para quando for direcionar o cliente para algum link fora da aplicação.
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsLoading(false);
      alert("Falha ao redirecionar ao checckout!");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={520} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isloading} onClick={handleBuyProduct}>
            {isloading ? " Carregando..." : "Comprar agora"}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_P2kTKfHwQ7D2ek" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const prices = await stripe.prices.list({
    active: true,
  });

  const priceSelected = prices.data.filter(
    (price) => price.product === productId
  );
  const priceId = priceSelected[0].id;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(priceSelected[0].unit_amount_decimal) / 100),
        description: product.description,
        priceId: priceId,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
