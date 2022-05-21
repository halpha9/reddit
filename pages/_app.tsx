import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>
  )

}

export default MyApp
