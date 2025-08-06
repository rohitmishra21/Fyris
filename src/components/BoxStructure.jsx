import React from 'react'
import Boxes from './Boxes'

const BoxStructure = () => {
    return (
        <div>
            <div className='md:hidden w-full  '>
                <img className='' src="hero-bg.svg" alt="" />
            </div>
            <div className='flex  '>
                <div>
                    <Boxes left={true} />
                </div>
                <div>
                    <Boxes imgSrc={"image.png"} count={"245"} heading={"conducted comapines"} />
                    <div className=''>
                        <Boxes imgSrc={"client.svg"} count={"338K"} heading={"Engaged clients"} isBoxRightSide={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxStructure
