import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/logo.svg";
import { HeaderContainer } from './style'
import { Cart } from "../Cart";
import { useCart } from "../../hook/userCart";

export function Header() {
  const {cartItems} = useCart()
  const quantityItensInCart = cartItems.length
    return(
        <HeaderContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Cart />
        <span>{quantityItensInCart}</span>
      </HeaderContainer>
    )
}