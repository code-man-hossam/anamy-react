import React from 'react'
import { objectives } from './data'

const Goals = () => {
  return (
    <section className='w-4/5 mx-auto flex flex-col mt-20 mb-5'>
      <h1 className='text-lg font-bold text-coffee_2 mb-5'>OBJECTIVES</h1>
      <ul>
        {objectives[0].map((item, index) => {
          return (
            <li key={index} className='mt-3 text-sm text-coffee_2'>
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Goals
