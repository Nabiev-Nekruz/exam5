import React from 'react'

const Card = (props) => {
  return (
    <div className='grid grid-cols-1 gap-5 '>
        <img className='m-auto' src={props.img} alt="" />
        <h1 className='text-[#211F54] text-[28px] text-center font-bold dark:text-[#fff]'>{props.title}</h1>
        <p className='text-[#6E7191] text-[21px] text-center not-italic font-normal dark:text-[#fff]'>{props.desc}</p>
    </div>
  )
}

export default Card