import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegTimesCircle } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { BsQuestionDiamond } from 'react-icons/bs'
import { GiClockwork } from 'react-icons/gi'
import { FaEnvira } from 'react-icons/fa'

const Menu = ({ show, setShow }) => {
  return (
    <div
      className={
        show
          ? 'w-full h-full top-0 font-body fixed bg-coffee_1 flex flex-col p-7 z-20 transform transition duration-500'
          : 'w-full h-full top-0 font-body fixed bg-coffee_1 flex flex-col p-7 z-20  transform translate-x-full transition duration-500'
      }
    >
      <div className='w-ful flex justify-end'>
        <button
          className='w-6 text-xl text-coffee_2'
          onClick={() => setShow(!show)}
        >
          <FaRegTimesCircle />
        </button>
      </div>
      <div className='w-full'>
        <ul className='w-full flex flex-col justify-between text-coffee_2 text-lg font-bold tracking-wide'>
          <li className='list'>
            <Link to='/' className='flex items-center'>
              <GoHome className='mr-1' />
              Home
            </Link>
          </li>
          <li className='list'>
            <Link to='/about' className='flex items-center'>
              <BsQuestionDiamond className='mr-1' />
              About Us
            </Link>
          </li>
          <li className='list'>
            <Link to='/services' className='flex items-center'>
              <GiClockwork className='mr-1' />
              Services
            </Link>
          </li>
          <li className='list'>
            <a
              href='mailto:anamygroup2@gmail.com'
              className='flex items-center'
            >
              <FaEnvira className='mr-1' />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
