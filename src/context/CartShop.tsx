import { ReactNode, createContext, useState } from "react";
import { produce } from "immer";


export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  priceId: string;
  quantity: number;
}

interface CartContextType {
    cartItems: IProduct[];
    addItemInCart: (product: IProduct) => void;
    removeProduct: (product: IProduct) => void;
    cartQuantity: (pid: number, type: 'increase' | 'decrease') => void;
}

interface CartContentProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContentProviderProps) {
  const [cartItems, setCartItem] = useState<IProduct[]>([]);

  function addItemInCart(product: IProduct) {
    const productExists = cartItems.findIndex((item) => item.id === product.id)

    const newProduct = produce(cartItems, (draft) => {
      console.log(productExists)
      if(productExists < 0) {
        draft.push(product)
      } else {
        draft[productExists].quantity += 1
      }
    })

    setCartItem(newProduct)
  }


  function cartQuantity(pid: number, type: 'increase' | 'decrease') {

    const newCart = produce(cartItems, (draft) => {
      const productExists = cartItems.findIndex(
        (cartItem) => cartItem.id === pid
      );

      if (productExists >= 0) {
        const item = draft[productExists];
        draft[productExists].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItem(newCart)
  }



  function removeProduct(product: IProduct) {
    const productDeleted = cartItems.filter((item) => item.id !== product.id)
    setCartItem(productDeleted)
  }

  

  return <CartContext.Provider 
  value={{
    cartItems,
    addItemInCart,
    removeProduct,
    cartQuantity,
  }}>{children}</CartContext.Provider>;
}
