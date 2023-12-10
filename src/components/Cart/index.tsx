import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent } from './style'
import { X } from 'phosphor-react'
import { CartButton } from '../CartButton'
import { ItemInCart } from './intemInCart'
import { useCart } from '../../hook/userCart'
import { formatMoney } from '../../utils/FormatterPrice'
import { useState } from 'react'
import axios from 'axios'
import Product from '../../pages/product/[id]'

export function Cart() {
    const { cartItems } = useCart()
    const quantity = cartItems.length

    const prices = cartItems.map((product) => {
        const priceTotal = product.price * 1
        return priceTotal
      })

    const totalPrices = prices.reduce((a, b) => a + b, 0)
    const totalPricesF = formatMoney(totalPrices)

    const ids = cartItems.map((p) => {
      const products = {
        price: p.id,
        quantity: 1,
      }
      return products
    })
    console.log(ids)
    async function handleBuyProduct() {
      
        try {
          const response = await axios.post("/api/checkout", {
            prouct: ids
          });
    
          const { checkoutUrl } = response.data;
    
          // Para quando for direcionar o cliente para algum link fora da aplicação.
          window.location.href = checkoutUrl;
        } catch (err) {
          alert("Falha ao redirecionar ao checckout!");
        }
      }

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

                          <button disabled={quantity <= 0} onClick={handleBuyProduct}>Finalizar Compra</button>
                       </footer>
                    </main>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}