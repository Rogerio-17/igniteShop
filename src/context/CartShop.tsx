import { produce } from "immer";
import { ReactNode, createContext, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addItemInCart: (product: CartItem) => void;
}

interface CartContentProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContentProviderProps) {
  const [cartItems, setCartItem] = useState<CartItem[]>();

  function addItemInCart(data: CartItem) {
    const newItemCart = produce(cartItems, (draft) => {
        draft.push(data)
    })

    console.log(newItemCart)
  }

  

  return <CartContext.Provider 
  value={{
    cartItems,
    addItemInCart,
  }}>{children}</CartContext.Provider>;
}
