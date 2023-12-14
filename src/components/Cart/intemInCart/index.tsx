import Image from "next/image";
import { ItemsContainer, ContentButton } from "./style";
import { IProduct } from "../../../context/CartShop";
import { formatMoney } from "../../../utils/FormatterPrice";
import { useCart } from "../../../hook/userCart";
import { CartQuantity } from "../../CartQuantity";

interface Product {
    product: IProduct
}

export function ItemInCart({product}: Product) {
    const priceFormated = formatMoney(product.price * product.quantity)
    const {removeProduct} = useCart()

    function handleDeleteProduct(product: IProduct) {
        removeProduct(product)
    }

    return(
        <ItemsContainer>
            <Image src={product.imageUrl} alt="" width={102} height={102}></Image>
            <ContentButton>
                 <p>{product.name}</p>
                 <span>{priceFormated}</span>

                <div>
                 <button onClick={() => handleDeleteProduct(product)}>Remover</button>
                 <CartQuantity key={product.id} id={product.id} quantity={product.quantity}/>
                </div>
            </ContentButton>
           
        </ItemsContainer>
    )
}