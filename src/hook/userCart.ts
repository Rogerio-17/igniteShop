import { useContext } from "react";
import { CartContext } from "../context/CartShop";

export function useCart() {
    const context = useContext(CartContext)
    return context
}