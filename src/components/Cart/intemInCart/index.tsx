import Image from "next/image";
import { ItemsContainer } from "./style";
import img from '../../../assets/camisetas/explorer.png'

export function ItemInCart() {
    return(
        <ItemsContainer>
            <Image src={img} alt=""></Image>

            <div>
                <p>Camiseta Maratona Explorer</p>
                <span>R$ 69,90</span>
                <button>Remover</button>
            </div>
        </ItemsContainer>
    )
}