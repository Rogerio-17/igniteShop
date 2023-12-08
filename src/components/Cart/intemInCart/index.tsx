import Image from "next/image";
import { ItemsContainer } from "./style";
import { IProduct } from "../../../context/CartShop";
import { formatMoney } from "../../../utils/FormatterPrice";
import { useCart } from "../../../hook/userCart";

interface Product {
    product: IProduct
}

export function ItemInCart({product}: Product) {
    const priceFormated = formatMoney(product.price)
    const {removeProduct} = useCart()

    function handleDeleteProduct(product: IProduct) {
        removeProduct(product)
    }

    return(
        <ItemsContainer>
            <Image src={product.imageUrl} alt="" width={102} height={102}></Image>

            <div>
                <p>{product.name}</p>
                <span>{priceFormated}</span>
                <button onClick={() => handleDeleteProduct(product)}>Remover</button>
            </div>
        </ItemsContainer>
    )
}