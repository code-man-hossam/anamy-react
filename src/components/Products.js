import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { products } from './data'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const Products = () => {
  return (
    <section className='w-4/5 mx-auto mt-20 mb-5'>
      <h1 className='text-lg font-bold text-coffee_2 mb-5'>PRODUCTS</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        keyBoardControl={true}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
      >
        {products.map((item, index) => {
          return (
            <article key={index} className='w-80 h-60 cursor-pointer'>
              <img
                src={item}
                alt='product'
                className='w-full h-full object-cover px-10'
              />
            </article>
          )
        })}
      </Carousel>
    </section>
  )
}

export default Products
