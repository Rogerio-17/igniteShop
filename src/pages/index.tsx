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
import { IProduct } from "../context/CartShop";
import { formatMoney } from "../utils/FormatterPrice";

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

 const { addItemInCart } = useCart()

 function handleAddProduct(e:MouseEvent<HTMLButtonElement>, product: IProduct) {
  e.preventDefault()
  addItemInCart(product)
  // Adiconar algo para deixar o usuario ciente que foi feito aadição do item no carrinho
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
                    <span>{formatMoney(product.price)}</span>
                  </div>

                  <CartButton onClick={(e) => handleAddProduct(e, product)}></CartButton>
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
      price: price,
      description: product.description,
      priceId: priceSelected[0].id
    }
  });


  return {
    props: {
      products,
    },

    revalidate: (60 * 60 * 2) / 2, //2 Hours
  };
};
