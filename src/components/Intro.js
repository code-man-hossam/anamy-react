import React from 'react'
import { Link } from 'react-router-dom'
import { data2 } from './data'

const Intro = () => {
  return (
    <section className='w-4/5 mx-auto flex flex-col items-center my-7'>
      <h1 className='text-3xl text-coffee_2 font-body font-bold'>
        Anamy for Multi Activities Co.Ltd.
      </h1>
      <p className='text-coffee_3 text-lg'>
        Anamy was established in 2018 and works in the field of various...{' '}
        <Link to='/about' className='text-blue-700'>
          read more
        </Link>
      </p>
      <div className='w-full gridRes mt-7'>
        {data2.map((item) => {
          const { id, title, desc } = item

          return (
            <article
              key={id}
              className='p-3 rounded cursor-pointer boxShadow hover:bg-coffee_3 transition duration-500'
            >
              <h1 className='text-coffee_2 text-lg'>{title}</h1>
              <p className='text-sm text-coffee_2 tracking-wider'>{desc}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Intro
