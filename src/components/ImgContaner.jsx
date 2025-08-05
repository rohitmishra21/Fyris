import React from 'react'
import ImgCard from './ImgCard'

const ImgContaner = () => {
  return (
    <div className='md:p-16'>
      <ImgCard imgSrc={"img1.svg"} />
      <ImgCard imgSrc={"img2.svg"} />
      <ImgCard imgSrc={"img1.svg"} />
    </div>
  )
}

export default ImgContaner
