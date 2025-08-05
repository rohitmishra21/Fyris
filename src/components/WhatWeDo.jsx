import React from 'react'
import CardContaner from './CardContaner'

const WhatWeDo = () => {
    return (
        <div>  <h1 className='text-3xl relative bruno-ace mt-16 tracking-[2px] md:text-start md:text-7xl p-6 text-center'>What we <span className='bg-gradient-to-r from-[#00AAF2] to-[#90759d] bg-clip-text text-transparent'>do</span></h1>

            <h2 className='text-center mt-3 text-xs md:text-2xl '>Design. Technology. Marketing</h2>
            <div className='flex md:block'>
                <div className='absolute'>
                    <img className='md:w-96' src="bgColor.svg" alt="" />

                </div>
                <h1 className='text-xs md:w-full md:text-center text-end leading-5   mt-6'>We're not just another digital agency. We're your end-to-end innovation partner.
                    Fyiris blends strategic creativity <br /> with robust engineering and sharp growth marketing to shape
                    digital experiences that matter.
                </h1>
            </div>
            <CardContaner />
        </div>
    )
}

export default WhatWeDo
