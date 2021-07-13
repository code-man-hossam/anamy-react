import React from 'react'
import { Link } from 'react-router-dom'
import { data2 } from './data'
import IntroItem from './IntroItem'

const Intro = () => {
  let introData = data2.filter((item) => item.id % 2 === 0)

  return (
    <>
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
      </section>
      <IntroItem data={introData} />
    </>
  )
}

export default Intro
