import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import { data } from './data'

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let lastIndex = data.length - 1

    if (index < 0) {
      setIndex(lastIndex)
    }

    if (index > lastIndex) {
      setIndex(0)
    }

    return index
  }, [index])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => clearInterval(slider)
  }, [index])

  return (
    <section className='w-full h-hero__2 font-body md:h-hero__1 relative overflow-hidden'>
      <div className='absolute awesome top-7 left-10 md:left-20 z-10'>
        <h1 className='text-2xl md:text-4xl text-coffee_2 font-luki'>
          Anamy Group
        </h1>
        <h3 className='text-lg md:text-xl text-coffee_1 font-luki'>
          Multi Activities Co.Ltd.
        </h3>
      </div>
      <button
        className='text-coffee_2 z-10 hidden absolute top-56 right-28 text-3xl md:block'
        onClick={() => setIndex(index + 1)}
      >
        <FiArrowRightCircle />
      </button>
      {data.map((item, itemIndex) => {
        const { id, img, title, text } = item

        let position = 'translate-x-full opacity-0'
        if (itemIndex === index) {
          position = 'translate-x-0 opacity-100'
        }

        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === data.length - 1)
        ) {
          position = '-translate-x-full opacity-0'
        }

        return (
          <div
            key={id}
            className={`w-full h-full grid place-items-center absolute transform transition duration-500 ${position}`}
          >
            <img
              src={img}
              alt=''
              className='w-full h-full absolute object-cover'
            />
            <div className='max-w-md z-10 px-9'>
              <h1 className='text-xl font-bold text-coffee_1'>{title}</h1>
              <p className='text-sm text-white tracking-wider'>
                {text.slice(0, 75) + '... '}
                <Link href='/services' className='text-blue-700'>
                  read more
                </Link>
              </p>
            </div>
          </div>
        )
      })}
      <button
        className='text-coffee_2 z-10 hidden absolute top-56 left-28 text-3xl md:block'
        onClick={() => setIndex(index - 1)}
      >
        <FiArrowLeftCircle />
      </button>
    </section>
  )
}

export default Hero
