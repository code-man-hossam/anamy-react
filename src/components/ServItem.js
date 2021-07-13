import React from 'react'

const ServItem = (props) => {
  return (
    <div className='w-full gridRes mt-10'>
      <div className='flex flex-col mr-3 mb-10 md:mr-10'>
        <h1 className='text-xl md:text-lg text-coffee_2 mb-3'>
          {props.service.titleEn}
        </h1>
        <p className='text-coffee_2 text-xs md:text-sm'>
          {props.service.textEn}
        </p>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-xl md:text-lg text-coffee_2 mb-3'>
          {props.service.titleAr}
        </h1>
        <p className='text-coffee_2 text-xs md:text-sm'>
          {props.service.textAr}
        </p>
      </div>
    </div>
  )
}

export default ServItem
