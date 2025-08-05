import React from 'react'

const MainHeading = () => {
    return (
        <div className='flex  justify-center items-center gap-4' >
            <img src="logo.svg" width={30} className='md:w-6' alt="" />
            <div className=' md:text-start text-right'>
                <h1 className='bruno-ace tracking-[11px] md:tracking-[7px] md:pr-2 text-2xl md:text-sm text-center '>Fyris</h1>
                <h1 className='text-xs wider md:text-[5px]'>Technologies</h1>
            </div>
        </div>
    )
}

export default MainHeading
