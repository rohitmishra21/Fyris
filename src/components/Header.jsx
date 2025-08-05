import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import MainHeading from './MainHeading';

const Header = () => {
    return (
        <div className='flex justify-between py-6'>
            <IoMenuSharp size={40} className='md:hidden' />
            <ul className='raleway uppercase hidden md:block text-sm'>
                <span className='bg-gradient-to-r from-[#00AAF2] to-[#90759d] bg-clip-text text-transparent'>Home</span>
                <li>service</li>
                <li>contacts</li>
                <li>insights</li>
                <li>success</li>
            </ul>
            <div className='hidden md:block '>
                <MainHeading />
            </div>

            <button className='bg-[#292a2d] text-white teachers px-6 h-8  rounded md:text-xs md:uppercase md:bg-gradient-to-r from-[#000] to-[#3c2268]'>Contact</button>
        </div>
    )
}

export default Header
