import React from 'react'

const WhyUs = () => {
    return (
        <div className=''>
            <h1 className='text-4xl md:text-6xl md:text-start md:px-10 md:mb-16 bruno-ace mt-16 tracking-[2px] text-center'>Why They Choose  <span className='bg-gradient-to-r from-[#00AAF2] to-[#90759d] bg-clip-text text-transparent'>Us</span>?</h1>
            <div className='relative'>

                <div className='flex md:justify-center justify-between md:gap-96'>
                    <img className='md:w-60' src="leftComa.svg " alt="" />
                    <img className='md:w-60 mt-36 md:mt-0' src="rightComa.svg " alt="" />
                </div>
                <div className='absolute md:hidden top-12'>
                    <p className=' text-center  px-16 leading-6 py-5 mt-10'>Fyiris turned our rough idea into a product that exceeded all expectations. Their design and tech teams are truly world-class.</p>
                    <h1 className=' text-center font-semibold' >— Founder, SaaS Startup</h1>
                </div>


                <div className='absolute top-12 text-center text-xl tracking-wide hidden md:block left-1/2 -translate-x-1/2'>
                    <h1>Fyiris turned our rough idea into a product that</h1>
                    <h1>all expectations. Their design and tech</h1>
                    <h1> teams are truly world-class.</h1>

                    <h1 className=' text-center font-semibold md:mt-4 tracking-wider' >— Founder, SaaS Startup</h1>
                </div>

            </div>
        </div>
    )
}

export default WhyUs
