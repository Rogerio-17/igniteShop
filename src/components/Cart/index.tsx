import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent } from './style'
import { X } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { ItemInCart } from './intemInCart'

export function Cart() {
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
                        <ItemInCart></ItemInCart>
                        <ItemInCart></ItemInCart>
                        <ItemInCart></ItemInCart>
                        <ItemInCart></ItemInCart>
                        <ItemInCart></ItemInCart>
                        <ItemInCart></ItemInCart>

                    </section>

                      <footer>
                          <div className='quantity'>
                            <p>Quantidade</p>
                            <span>3 itens</span>
                          </div>
                          <div className='value'>
                            <p>Valor total</p>
                            <span>R$ 270,00</span>
                          </div>

                          <button>Finalizar Compra</button>
                       </footer>
                    </main>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}