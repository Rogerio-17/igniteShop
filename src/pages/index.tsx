import Image from "next/image";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}


export default function Home({products}:HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={slideRef} className="keen-slider">

    </HomeContainer>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    console.log(product.default_price)

    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price,
    }
  })

  

  return{
    props: {
      products
    }
  }
}
