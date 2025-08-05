import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import ImgContaner from './ImgContaner';
const DesignServices = () => {
    return (
        <div>
            <h1 className='text-2xl bruno-ace mt-16 tracking-[1px] md:text-6xl text-center'>Thing We've Made</h1>
            <div className='flex justify-center my-4'>
                <div className='w-12 md:w-20 md:h-20 h-12 border-white border-2 rounded-full flex justify-center items-center'>
                    <FaArrowDownLong />
                </div>
            </div>
            <ImgContaner />
        </div>
    )
}

export default DesignServices
