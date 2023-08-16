import React from 'react'

const Card2 = (props) => {
  return (
    <div className='grid grid-cols-1 gap-5 card2  items-center justify-center dark:bg-[#0d162c] '>
        <img className='m-auto h-[30vh] pt-5' src={props.img2} alt="" />
        <h1 className='text-[#211F54] text-[28px] text-center font-bold dark:text-[#fff]'>{props.title2}</h1>     
        <p className='text-[#6E7191] text-[21px] text-center not-italic font-normal dark:text-[#fff] xl:w-[312px] sm:w-full  m-auto'>{props.desc2}</p>
    </div>
  )
}

export default Card2