import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent } from './style'
import { X } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { ItemInCart } from './intemInCart'
import { useCart } from '../../hook/userCart'
import { formatMoney } from '../../utils/FormatterPrice'

export function Cart() {
    const { cartItems } = useCart()
    const quantity = cartItems.length

    const prices = cartItems.map((product) => {
        const priceTotal = product.price * 1
        return priceTotal
      })

    const totalPrices = prices.reduce((a, b) => a + b, 0)
    const totalPricesF = formatMoney(totalPrices)

    // Quando a sacola estiver vazia deixa o botão desabilitado ----------- ATENÇÃO!!!!!!!! ------------

    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton></CartButton>
            </Dialog.Trigger>

            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} width='bold'/>
                    </CartClose>

                    <h2>Sacola de compras</h2>

                    <main>
                    <section>
                        {
                         cartItems.length <= 0 ? <p>Sacola está vazia :(</p> :

                         cartItems.map((product) => (
                            <ItemInCart key={product.id} product={product}></ItemInCart>
                         ))
                        }
                    </section>

                      <footer>
                          <div className='quantity'>
                            <p>Quantidade</p>
                            <span>{quantity} itens</span>
                          </div>
                          <div className='value'>
                            <p>Valor total</p>
                            <span>{totalPricesF}</span>
                          </div>

                          <button>Finalizar Compra</button>
                       </footer>
                    </main>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}