import React from 'react';

const Boxes = ({ left, isBoxRightSide, imgSrc, heading, count }) => {
    return left ? (
        <div className=" ml-8 mr-2 md:hidden lg:flex flex-col items-center justify-between bg-black border-2 md:border border-zinc-300 rounded-2xl w-16 h-[270px] md:h-[350px] p-4">
            <p className="text-white text-xs relative top-20 tracking-wider transform -rotate-90 whitespace-nowrap">
                <span className='dot'>READY TO</span> GET STARTED?  </p>
            <button className="bg-white rounded-xl w-10 h-10 flex rotate-90 items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokwidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 7h10v10" />
                </svg>
            </button>
        </div>

    ) : (

        <div className={`w-[265px] relative h-[130px] md:h-[170px] md:w-[300px] md:hidden lg:flex  justify-between  px-5  gap-3  ${isBoxRightSide ? ' flex-row-reverse' : 'flex - row'} p-2 mb-2 rounded-2xl md:border border-2 border-zinc-300`}>
            <div className={` ${isBoxRightSide ? ' flex-col-reverse' : 'flex - col'} ${isBoxRightSide ? "text-end" : "text-start"} flex flex-col`}>
                <h1 className='uppercase  leading-5 mb-2 '>{heading}</h1>
                <img src={imgSrc} className={`${isBoxRightSide ? "w-52 md:w-28  p-2.5 ml-4" : "w-16"}`} alt="" />
            </div>
            <div className=" absolute top-[45%] left-6 w-[85%] hidden md:block border-t border-dotted border-white"
                style={{ transform: 'rotate(-30deg) translateY(-50%)' }}></div>
            <div className={`${isBoxRightSide ? "items-start" : "items-end"} flex`}>
                <h1 className='text-5xl'>{count}</h1>
            </div>
        </div>

    );
};

export default Boxes;
