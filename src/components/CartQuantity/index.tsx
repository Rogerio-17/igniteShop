import { CountCoffeContainer } from "./style";

export function CartQuantity() {
    return (
        <CountCoffeContainer>
          <button type="button" >-</button>
          <input type="text" value={1}/>
          <button>+</button>
        </CountCoffeContainer>
    )
}