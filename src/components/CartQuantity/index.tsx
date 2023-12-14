import { useCart } from "../../hook/userCart";
import { CartCount } from "./style";

interface CartQuantityProps {
  quantity: number
  id: number
}

export function CartQuantity({id, quantity} : CartQuantityProps) {
  const {cartQuantity} = useCart()

  function handleIncrease() {
    cartQuantity(id, "increase")
  }

  function handleDecrease() {
    cartQuantity(id, "decrease")
  }

    return (
        <CartCount>
          <button type="button" disabled={quantity <= 1} onClick={handleDecrease} >-</button>
          <input type="text" value={quantity}/>
          <button type="button" onClick={handleIncrease}>+</button>
        </CartCount>
    )
}