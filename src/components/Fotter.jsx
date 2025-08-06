import React from 'react'
import MainHeading from './MainHeading'

const Fotter = () => {

    return (
        <div className='mt-20 relative'>
            <div className='md:flex justify-between lg:px-32 md:px-6 lg:text-sm md:text-xs items-start '>
                <MainHeading />
                <ul className='text-center my-6 md:m-0 leading-7'>
                    <h5 className='uppercase mb-5 text-zinc-600 text-xs'> info</h5>
                    <li>Works</li>
                    <li>About</li>
                    <li>For customers</li>
                    <li>Contacts</li>
                </ul>
                <div>
                    <h5 className='uppercase mb-5 text-zinc-600 text-xs'>contract us</h5>
                    <h5>+1 980 971-24-19</h5>
                    <h6>hello@logoipsum.com</h6>
                </div>
                <div>
                    <h5 className='uppercase my-5  md:mb-5 md:mt-0  text-zinc-600 text-xs'>Find us</h5>
                    <h5>1901 Thornridge Cir. Shiloh, Hawaii 81063</h5>
                    <h5 className=' text-zinc-600 text-xs py-2'>Everyday from 10 am to 8 pm</h5>
                </div>
            </div>
            <span className='bg-gradient-to-r from-[#4CAEFE] via-[#4878EA] to-[#B62CA4] bg-clip-text bruno-ace text-transparent text-[119px] md:hidden'>Fyris</span>
            <div className="relative w-full lg:h-[55vh] md:h-[28vh]  overflow-hidden hidden md:block">
                <div className="absolute -top-8 left-0 w-full flex justify-between lg:gap-[90px] lg:-ml-10 bg-clip-text bruno-ace text-transparent  md:text-[200px] lg:text-[380px]">
                    {["F", "y", "r", "i", "s"].map((l, i) => (
                        <h1 key={i} className="bg-gradient-to-r from-[#4CAEFE] via-[#4878EA] to-[#B62CA4] bg-clip-text text-transparent">
                            {l}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Fotter
