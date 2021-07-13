import React from 'react'
import { data } from '../components/data'
import Products from '../components/Products'
import ServItem from '../components/ServItem'

const ServicesPage = () => {
  return (
    <section className='w-4/5 mx-auto flex flex-col mt-10'>
      <div className='awesome'>
        <h1 className='text-2xl md:text-4xl text-coffee_2 font-luki'>
          Anamy's Services
        </h1>
        <h3 className='text-lg md:text-xl text-coffee_1 font-luki'>
          Multi Activities Co.Ltd.
        </h3>
      </div>
      <ServItem service={data[0]} />
      <ServItem service={data[1]} />
      <ServItem service={data[2]} />
      <ServItem service={data[3]} />
      <ServItem service={data[4]} />
      <ServItem service={data[5]} />
      <Products />
    </section>
  )
}

export default ServicesPage
