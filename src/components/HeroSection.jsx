import React from 'react'


import BoxStructure from './BoxStructure'
import MainHeading from './MainHeading'
import HeroFotter from './HeroFotter'

const HeroSection = () => {
    return (
        <div className='relative'>
            <div className='md:hidden'>
                <MainHeading />
            </div>
            <div className='md:flex'>
                <div className=' mt-8 md:w-1/2 md:text-end  '>
                    <div className=' md:font-medium'>
                        <h1 className='px-8 leading-10 md:mr-10'><span className='text-xl  md:text-3xl'>We</span> <span className='text-2xl md:text-4xl  px-2'>Create</span>
                            <span className='text-4xl md:text-6xl bg-gradient-to-r from-[#00AAF2] to-[#90759d] bg-clip-text text-transparent'>Experiences</span>

                        </h1>
                        <h1 className='pl-14 absolute md:static '><span className='text-xl md:text-3xl'>That</span> <span className='text-4xl md:text-6xl  px-2'>Solve</span>
                            <span className='text-xl md:text-3xl'>Your</span><span className='text-4xl md:text-6xl px-2'>Problem.</span>
                        </h1>
                    </div>
                    <div className=' hidden md:flex justify-end py-5'>
                        <p className='text-start w-52  text-xs' >Develops unique concepts for thesystem architecture by creating high- <br />level representations, identifying key components, and establishing interaction mechanisms. Visualizes and presents architectural designs for <br /> stakeholder review.</p>
                    </div>
                    <div className='md:flex hidden items-end relative'>
                        <div>
                            <BoxStructure />
                        </div>
                        <div className='w-full '>
                            <HeroFotter />

                        </div>
                    </div>
                </div>
                <div className='hidden md:block md:w-1/2  '>
                    <img src="hero-bg.svg" className='w-full' alt="" />
                </div>
            </div>
            <div className='md:hidden'>
                <BoxStructure />
            </div>

            <h1 className='text-2xl p-7 md:hidden'>Develops unique concepts for the system architecture by creating high- <br />level representations.</h1>
        </div>
    )
}

export default HeroSection
