import camisa from '../../assets/camisetas/explorer.png'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto
          molestias hic id minus magnam explicabo laboriosam, dolores distinctio
          temporibus recusandae unde, error repellat. Ea aliquam officia
          voluptatibus vero dolore?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
