import React from 'react'
import { objectives } from '../components/data'

const AboutGoals = () => {
  return (
    <section className='w-4/5 mx-auto gridRes mt-20'>
      <div className='flex flex-col'>
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
      </div>
      <div className='flex flex-col'>
        <h1 className='text-lg font-bold text-coffee_2 mb-5'>الأهـــــداف</h1>
        <ul>
          {objectives[1].map((item, index) => {
            return (
              <li key={index} className='mt-3 text-sm text-coffee_2'>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default AboutGoals
