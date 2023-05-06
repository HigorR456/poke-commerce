import '@/styles/globals.scss'
import '@/styles/home.scss'
import '@/styles/products.scss'
import '@/styles/pokemon.scss'
import '@/styles/cart.scss'
import '@/styles/shopping-cart.scss'
import '@/styles/success.scss'

import type { AppProps } from 'next/app'
import { CartProvider } from '../context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
