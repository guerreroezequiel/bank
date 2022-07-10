import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SessionProvider } from "next-auth/react"




function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider>
      <Header/>
      <div className='flex justify-center bg-gradient-to-br from-slate-300  via-slate-200 to-slate-300'>
        <div className= 'flex justify-center w-screen items-top pt-20 pb-10  bg-gradient-to-br from-slate-100 to-slate-200 min-h-[92vh] border-opacity-5 xl:w-[1300px]'>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer/>
    </SessionProvider>
  )
}

export default MyApp
