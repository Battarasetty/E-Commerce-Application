import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='h-30'>
            <div className='pt-5 px-5 flex justify-between items-center'>
                <div className='flex-1 flex items-center'>
                    <span className='text-lg cursor-pointer'>EN</span>
                    <div className='border flex items-center ml-6 p-1'>
                        <input type='search' className='border-0 focus:outline-none' />
                        <FaSearch className='text-base' style={{ color: 'grey' }} />
                    </div>
                </div>
                <div className='flex-1 text-center'>
                    <h1 className='font-extrabold text-xl'>ShoppingCart</h1>
                </div>
                <div className='flex-1 flex items-center gap-10 justify-end relative'>
                    <div className='text-sm cursor-pointer uppercase'>Register</div>
                    <div className='text-sm cursor-pointer uppercase'>Signin</div>
                    <div className="absolute h-4 flex items-center justify-center right-0 bottom-7 w-4 bg-red-500 text-white rounded-full p-1">
                        4
                    </div>
                    <FaCartPlus className='w-10 h-10' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
