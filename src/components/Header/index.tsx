import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/logo.svg";
import { HeaderContainer } from './style'
import { Handbag } from "phosphor-react";
import { Cart } from "../Cart";

export function Header() {
    return(
        <HeaderContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Cart />
      </HeaderContainer>
    )
}