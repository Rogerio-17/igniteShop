import { GetStaticPaths, GetStaticProps } from "next";
import {
  ImageContainer,
  LoadPage,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { stripe } from "../../lib/stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { useCart } from "../../hook/userCart";
import { IProduct } from "../../context/CartShop";
import { formatMoney } from "../../utils/FormatterPrice";
import { toastify } from "../../components/ToastifySettings";

export default function Product(product: IProduct) {
  const { isFallback } = useRouter();
  const { cartItems, addItemInCart } = useCart()

  const quantity = (cartItems.map((item) => {
    if(product.id === item.id){
      return item.quantity
    }
  }))

  const priceFormated = formatMoney(product.price)

  if (isFallback) {
    return (
      <LoadPage>
        <div className="main"></div>
        <div className="secondary">
          <div className="information"></div>
          <div className="bnt"></div>
        </div>
      </LoadPage>
    );
  }

  function handleAddProduct() {
    addItemInCart(product)
    toastify("Item adicionado na sacola!")
  }

/*

*/

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={520} />
          {
            quantity[0] > 0 ? <h2>{quantity}x</h2> : <></>
          }
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormated}</span>

          <p>{product.description}</p>

          <button onClick={handleAddProduct}>Colocar na sacola</button>
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
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceSelected[0].unit_amount_decimal,
        description: product.description,
        priceId: priceId,
        quantity: 1
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
