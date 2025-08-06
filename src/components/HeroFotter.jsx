import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
const HeroFotter = () => {
    return (
        <div className='hidden md:block'>
            <div className='w-[100%] bottom-2   flex justify-between items-center pr-4  left-[80%]  absolute h-24 rounded-2xl     bg-gradient-to-r from-[#0a0a0f] via-[#0d0d25] to-[#111827] '>
                <div className='flex gap-2 mr-16 items-center h-full'>
                    <img src="heroFotter1.svg" alt="" />
                    <img src="heroFotter2.svg" alt="" />
                    <img src="heroFotter3.svg" alt="" />
                </div>
                <div className='lg:flex md:hidden  gap-3 p-11'>
                    <button>VIEW PROJECT</button>
                    <div className=''>
                        <div className='w-12 h-12 border-white border-2 rounded-full flex justify-center items-center'>
                            <FaArrowDownLong />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroFotter
