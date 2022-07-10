import React, {useState} from "react";
import { BsBank2 } from 'react-icons/bs';
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {HiOutlineTrendingUp} from 'react-icons/hi'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {CgMenuRight}  from 'react-icons/cg'
import {BsArrowBarUp} from 'react-icons/bs'
import Link from 'next/link'



function Header() {

  const [clicked,setClick] = useState(false)
  const click = () => {
    setClick(!clicked)
  }

  return (
    <nav className={`${clicked ? 'h-[500px]' : 'h-20'} flex w-full duration-300 float-left fixed top-0
     bg-blue-800 bg-opacity-80 text-white pt-2 pb-3 rounded-b-3xl text-center backdrop-blur-md
     md:h-20 shadow-md md:rounded-none md:justify-end md:pr-7  md:bg-opacity-60 md:hover:bg-opacity-80 md:space-x-5`}>
    

        <div className='flex space-x-1 pt-1 absolute top-[22px] left-8 items-bottom'>
          <BsBank2 className='h-6 w-6 ' />
          <h1 className='text-xl text-center'>Bank</h1>
        </div>


      {/* boton menu */}
      <CgMenuRight onClick= {click} className= {`${clicked ? 'hidden ' : 'flex'} 
       md:hidden absolute top-5 right-7 align-se h-11 w-11 mr-0 cursor-pointer active:text-black`}/>
      <div onClick= {click} className={`${clicked ? 'flex-column' : 'hidden'} pt-14 text-3xl space-x-1 items-center md:pt-1 md:text-lg md:flex md:space-x-5 `}>

        <Link href='/'>
          <div className='my-5 flex w-screen h-14 justify-center items-center space-x-1 pr-7 cursor-pointer 
           rounded-md md:hover:scale-110 duration-300 active:text-black md:flex md:w-auto md:h-auto md:py-1 md:px-2 md:my-2'>
            <AiOutlineHome className='h-[28px] w-6  '/> 
            <a>Home</a>
          </div>
        </Link>

        <Link href='/cuentaPage/cuentaPage'>
          <div className='my-5 flex w-screen h-14 justify-center items-center space-x-1 pr-7 cursor-pointer 
           rounded-md md:hover:scale-110 duration-300 active:text-black md:flex md:w-auto md:h-auto md:py-1 md:px-2 md:my-2'>
            <MdOutlineAccountCircle className='h-6 w-6 '/> 
            <a>Cuenta</a>
          </div>
        </Link>

        <Link href='/segurosPage/segurosPage'>
          <div className='my-5 flex w-screen h-14 justify-center items-center space-x-1 pr-7 cursor-pointer 
           rounded-md md:hover:scale-110 duration-200 active:text-black md:flex md:w-auto md:h-auto md:py-1 md:px-2 md:my-2'>
            <RiSecurePaymentFill className='h-6 w-6 '/> 
            <a>Seguros</a>
          </div>
        </Link>

        <Link href='/prestamosPage/prestamosPage'>
          <div className='my-5 flex w-screen h-14 justify-center items-center space-x-1 pr-7 cursor-pointer 
           rounded-md md:hover:scale-110 duration-300 active:text-black md:flex md:w-auto md:h-auto md:py-1 md:px-2 md:my-2'>
            <FaRegMoneyBillAlt className='h-6 w-6 '/> 
            <a>Prestamos</a>
          </div>
        </Link>

        <Link href='/inversionesPage/inversionesPage'>
          <div className='my-5 flex w-screen h-14 justify-center items-center space-x-1 pr-7 cursor-pointer 
           rounded-md md:hover:scale-110 duration-300 active:text-black md:flex md:w-auto md:h-auto md:py-1 md:px-2 md:my-2'>
            <HiOutlineTrendingUp className='h-6 w-6'/> 
            <a>Inversiones</a>
          </div>
        </Link>

        {/* boton cierre */}
        <BsArrowBarUp onClick= {click} className= {`${clicked ? 'flex' : 'hidden'}  md:hidden absolute top-5 right-7 h-11 w-11 cursor-pointer active:text-black`}/>
      </div>
    </nav>
  )
}

export default Header