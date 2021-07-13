import React from 'react'

const IntroItem = (props) => {
  return (
    <section className='w-4/5 mx-auto mt-20 grid md:grid-cols-2 gap-10'>
      {props.data.map((item) => {
        const { id, title, desc } = item

        return (
          <div
            key={id}
            className='h-40 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'
          >
            <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>{title}</h1>
            <p className='text-xs md:text-sm text-coffee_2'>{desc}</p>
          </div>
        )
      })}
    </section>
  )
}

export default IntroItem
