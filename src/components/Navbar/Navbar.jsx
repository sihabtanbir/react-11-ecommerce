import React from 'react';
import Logo from "../../assets/logo.png" ;
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";

const Menu =[
    {
        id:1,
        name: "Home",
        link: "/#", 
    },
    {
        id:2,
        name: "Top Rated",
        link: "/#services", 
    },
    {
        id:3,
        name: "Kids Wear",
        link: "/#", 
    },
    {
        id:4,
        name: "Mens Wear",
        link: "/#", 
    }
  
   
];

const DropdownLinks =[
    {
        id:1,
        name: "Trending Products",
        link: "/#", 
    },
    {
        id:2,
        name: "Best Selling",
        link: "/#services", 
    },
    {
        id:3,
        name: "Top Rated",
        link: "/#", 
    }
   
]

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
                        <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-300' />
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
        <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {
                    Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link}
                            className='inline-block px-4 hover:text-primary duration-200 '>{data.name}</a>
                        </li>
                    ))
                }
                <li className='group relative cursor-pointer'>
                    <a href="#" 
                     className='flex items-center gap-1 py-2'
                    >Trending Products
                    <span>
                        <FaCaretDown className='tansition-all duration-200 group-hover:rotate-180 '/>
                    </span>
                    </a>
                    <div className='absolute z-[99] hidden group-hover:block w-[180px] rounded-md bg-white p-2 '>
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li key={data.id}
                                className='hover:bg-primary/20 inline-block p-2 w-full rounded-md'>
                                    <a href={data.link}>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar