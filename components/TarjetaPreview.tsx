
import React, {useEffect, useState} from "react";
import {SiMastercard} from 'react-icons/si'



function TarjetaPreview(props:any) {
  const [barra, setBarra] = useState(10) 
  useEffect(()=>{submitBarra()}, [])
  
  const submitBarra = () => setBarra(Math.round(100 - props.tarjeta.spending * 100 / props.tarjeta.max))
 
  const disponible = props.tarjeta.max - props.tarjeta.spending

  return ( 
    <div onClick={submitBarra}  className='flex flex-col h-36 w-screen md:max-w-xl my-5 mx-2 py-3 px-5 ring-2 border ring-stone-200 ring-opacity-80
     bg-opacity-10 bg-gradient-to-br from-slate-100 to-stone-200 rounded-xl shadow-md '>
        <div className='flex justify-between items-end '>
          <div className='flex justify-center items-center space-x-2'>
            <p className='text-xl'>{props.tarjeta.provider}</p>
            <SiMastercard className='h-5 w-5'/>
          </div>
          <a href="#" className='' >Ver Resumen</a>
        </div>
        <div id='barra container' className='h-[9px]  mt-3 flex flex-row-reverse ring-1 rounded-lg
        bg-gradient-to-r from-blue-200 to-blue-600 '>
          <div id='barraLlenado' style={{width: barra + '%'}} className='h-[9px] flex bg-white rounded-r-lg'></div>  
        </div>
        <div className='flex justify-between mt-3'>
          <div className="flex flex-col items-start text-lg">
            <p className='mr-2'>Disponible </p><p className='text-green-700'>${disponible}</p>
          </div>
          <div className="flex flex-col items-end text-md">
            <p>Gastos <span className='text-red-700'>${props.tarjeta.spending}</span></p>
            <p>Tope ${props.tarjeta.max}</p>
          </div>
        </div>
    </div>
  )
}

export default TarjetaPreview

