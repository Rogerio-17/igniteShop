import Image from "next/image";
import { ItemsContainer } from "./style";
import img from '../../../assets/camisetas/explorer.png'
import { IProduct } from "../../../context/CartShop";
import { formatMoney } from "../../../utils/FormatterPrice";

interface Product {
    product: IProduct
}

export function ItemInCart({product}: Product) {
    const priceFormated = formatMoney(product.price)

    return(
        <ItemsContainer>
            <Image src={product.imageUrl} alt="" width={102} height={102}></Image>

            <div>
                <p>{product.name}</p>
                <span>{priceFormated}</span>
                <button>Remover</button>
            </div>
        </ItemsContainer>
    )
}