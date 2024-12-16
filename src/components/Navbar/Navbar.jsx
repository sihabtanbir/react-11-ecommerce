import React from 'react';
import Logo from "../../assets/logo.png" ;
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
        {/* upper navbar  */}
        <div className='bg-primary/40 py-3 sm:py-0'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl flex gap-2'>
                        <img src={Logo} alt="logo" className='w-10 h-10'/> Shopsy
                    </a>
                </div>
                <div>
                    <div className='relative hidden sm:block group'>
                        <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' />
                        <IoSearch 
                        className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                <button onClick={()=> alert("This feature is currently not available")} 
                    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white p-1 px-4 rounded-full flex items-center gap-3 group '
                    >
                    
                    <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                    <FaCartShopping  className='text-xl text-white drop-shadow-sm cursor-pointer my-1'/>
                </button>

                <DarkMode/>
                </div>
            </div>
        </div>

        {/* lower navbar  */}
        <div>

        </div>
    </div>
  )
}

export default Navbar