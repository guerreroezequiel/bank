import React from 'react'
import TarjetaPreview from '../../components/TarjetaPreview'
import CuentasPreview from '../../components/CuentaPreview'
import axios from 'axios'



function cuentaPage({cuenta,tarjeta}:any) {
  return (
    <div  className='flex flex-col items-center px-10'> 
      <CuentasPreview cuenta={cuenta}/>
      <TarjetaPreview tarjeta={tarjeta} /> 
    </div>

  )
}

export async function getStaticProps() {
  // try{
    const resAccount = await axios.get(`http://localhost:1337/api/users/5?populate=account`)
    const resCards = await axios.get(`http://localhost:1337/api/users/5?populate=cards` )
    const cuenta = await resAccount.data.account
    const tarjeta = await resCards.data.cards[0]
    return {
      props:{
        cuenta,
        tarjeta
      },
    }
//   } catch (error) {
//     return {error:Error}
//   } 
}
export default cuentaPage