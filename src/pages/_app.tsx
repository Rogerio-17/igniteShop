import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";
import { CartContextProvider } from "../context/CartShop";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
      <ToastContainer />
    </CartContextProvider>
  );
}
