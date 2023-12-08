import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  priceId: string;
}

interface CartContextType {
    cartItems: IProduct[];
    addItemInCart: (product: IProduct) => void;
}

interface CartContentProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContentProviderProps) {
  const [cartItems, setCartItem] = useState<IProduct[]>([]);

  function addItemInCart(product: IProduct) {
    setCartItem((state) => [...state, product])
  }

  console.log(cartItems)

  

  return <CartContext.Provider 
  value={{
    cartItems,
    addItemInCart,
  }}>{children}</CartContext.Provider>;
}
