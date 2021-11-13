import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Container from '../components/Container'

function MyApp({ Component, pageProps }: AppProps) {
  return(
 
    <Component {...pageProps} />
  
  )
  
}

export default MyApp
