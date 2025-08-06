import React from 'react'
import Cards from './Cards'

const CardContaner = () => {
    return (
        <div className='flex relative  md:flex-row md:justify-center  md:mt-12 w-full flex-col gap-3 py-5 '>
            <div className='flex gap-4 mb-2  items-end  '>
                <Cards ylength={188} text={"Design."} />
                <Cards ylength={258} text={"Tech."} />
                <div className='md:flex hidden'>
                    <Cards ylength={198} text={"Branding."} />
                    <img className='absolute md:-right-4 lg:right-0 lg:w-96 lg:top-44 md:w-72 md:top-24  ' src="bgline.svg" alt="" />
                </div>
            </div>
            <div className='flex md:hidden'>
                <Cards ylength={198} text={"Branding."} />
                <img src="bgColor.svg" alt="" />
            </div>
        </div>
    )
}

export default CardContaner
