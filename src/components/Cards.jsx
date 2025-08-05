import React from 'react'

const Cards = ({ ylength, text }) => {

  return (
    <div>
      <div className={`w-[184px]  bg-no-repeat bg-cover rounded-xl md:w-[304px] relative md:hidden `} style={{
        height: `${ylength}px`,
        backgroundImage: `url("/cardbg.svg")`
      }}>
        <h1 className='absolute  top-16 left-1/2 -translate-x-1/2'>{text}</h1>
      </div>
      <div className={`w-[184px]  bg-no-repeat bg-cover rounded-xl md:w-[304px] relative md:h-[407px] `} style={{
        backgroundImage: `url("/cardbg.svg")`
      }}>
        <div className='w-full h-full hidden  md:flex justify-center items-center'>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Cards
