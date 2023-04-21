import '@/styles/globals.scss'
import '@/styles/home.scss'
import '@/styles/products.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
