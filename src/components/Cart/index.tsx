import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent } from './style'
import { X } from 'phosphor-react'
import { CartButton } from '../CartButton'

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

                    <section>
                        <p>Carrinho está vazio :(</p>
                    </section>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}