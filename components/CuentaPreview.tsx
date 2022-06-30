import React, {useEffect, useState} from "react";
import {SiMastercard} from 'react-icons/si'
import axios from 'axios'


// axios.get('http://localhost:1337/api/users').then(response => {
//   console.log(response);
// });

function CuentaPreview(props:any) {

  return ( 
    <div className='flex flex-col h-50 w-screen md:max-w-xl my-5 mx-2 py-1 px-3 ring-2 border ring-stone-100 ring-opacity-80
    bg-opacity-10 bg-gradient-to-br from-slate-100 to-stone-200 rounded-xl shadow-md '>
        <div className='flex justify-between items-end '>
          <div className='flex justify-center items-center space-x-2'>
            <p className='text-xl'>Cuenta <span className='text-stone-500'>{props.cuenta.cvu}</span></p>
            <SiMastercard className='h-5 w-5'/>
          </div>
          <a href="#" className='' >Ver Resumen</a>
        </div>
        <div className='flex justify-between mt-2 '>
          <div className="block">
            <p className='mr-2'>Disponible ${props.cuenta.disponible}</p>
          </div>
          <div className="flex">

          </div>
        </div>
      </div>
  )
}

export default CuentaPreview