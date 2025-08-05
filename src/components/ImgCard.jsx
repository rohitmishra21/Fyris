import React from 'react'

const ImgCard = ({ imgSrc }) => {
    return (
        <div>
            <img className='md:w-full' src={imgSrc} alt="" />
        </div>
    )
}

export default ImgCard
