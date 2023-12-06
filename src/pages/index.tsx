import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import { CartButton } from "../components/CartButton";
import { useCart } from "../hook/userCart";

interface HomeProps {
  products: {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: string;
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addItemInCart } = useCart()

 function handleAddProduct(product: Product) {
  addItemInCart(product)
 }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={slideRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={520} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <CartButton onClick={() => handleAddProduct(product)}></CartButton>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
    active: true,
  });

  const prices = await stripe.prices.list({
    active: true,
  });

  const products = response.data.map((product) => {
    const priceSelected = prices.data.filter(
      (price) => price.product === product.id
    );
    const price = priceSelected[0].unit_amount_decimal;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(price) / 100),
    };
  });

  return {
    props: {
      products,
    },

    revalidate: (60 * 60 * 2) / 2, //2 Hours
  };
};
