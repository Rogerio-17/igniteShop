import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  priceId: string;
  productExist: boolean;
}

interface CartContextType {
    cartItems: IProduct[];
    addItemInCart: (product: IProduct) => void;
    removeProduct: (product: IProduct) => void;
}

interface CartContentProviderProps {
  children: ReactNode;
}

const IGNITESHOP_ITENS_STORAGE_KEY = "igniteShop:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContentProviderProps) {
  const [cartItems, setCartItem] = useState<IProduct[]>([]);

  function addItemInCart(product: IProduct) {
    const newProduct = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      description: product.description,
      priceId: product.priceId,
      productExist: true,
    }

    setCartItem((state) => [...state, newProduct])

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
  }}>{children}</CartContext.Provider>;
}
