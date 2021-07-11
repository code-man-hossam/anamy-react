import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './data'
import { ImPointRight } from 'react-icons/im'

const Services = () => {
  return (
    <section className='w-4/5 mx-auto flex flex-col items-start mt-20 mb-5'>
      <h1 className='text-lg font-bold text-coffee_2 mb-5'>SERVICES</h1>
      <div className='w-full gridRes'>
        {data.map((item) => {
          const { img, title, id } = item
          return (
            <div
              key={id}
              className='bg-coffee_2 flex flex-col rounded overflow-hidden cursor-pointer shadow-md'
            >
              <div className='w-full h-4/5'>
                <img
                  src={img}
                  alt='services'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='px-1 my-3 flex items-center justify-between'>
                <h1 className='text-sm md:text-lg text-coffee_1'>{title}</h1>
                <Link
                  to='/services'
                  className='text-sm md:text-lg text-coffee_1'
                >
                  <ImPointRight />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
