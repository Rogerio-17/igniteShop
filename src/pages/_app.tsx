import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Link href="/product" className="handbag">
          <Handbag size={24} weight="bold"></Handbag>
          <span>6</span>
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
