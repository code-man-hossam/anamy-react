import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { GoHome } from 'react-icons/go'
import { BsQuestionDiamond } from 'react-icons/bs'
import { GiClockwork } from 'react-icons/gi'
import { FaEnvira } from 'react-icons/fa'
import Menu from './Menu'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <nav className='w-full h-14 bg-coffee_2 grid grid-cols-2 px-10 md:px-20 font-body'>
        <div className='flex items-center justify-start'>
          <Link to='/'>
            <img
              src='/logo.png'
              alt='logo'
              className='w-10 md:w-11 object-contain ml-5'
            />
          </Link>
        </div>
        <div className='flex items-center justify-end md:hidden'>
          <button
            className='text-xl text-coffee_1'
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineMenuFold />
          </button>
        </div>
        <div className='hidden md:flex'>
          <ul className='w-full flex items-center justify-between text-coffee_1 text-sm font-bold tracking-wide'>
            <li className='hover:text-coffee_3 transition duration-500'>
              <Link to='/' className='flex items-center'>
                <GoHome className='mr-1' />
                Home
              </Link>
            </li>
            <li className='hover:text-coffee_3 transition duration-500'>
              <Link to='/about' className='flex items-center'>
                <BsQuestionDiamond className='mr-1' />
                About Us
              </Link>
            </li>
            <li className='hover:text-coffee_3 transition duration-500'>
              <Link to='/services' className='flex items-center'>
                <GiClockwork className='mr-1' />
                Services
              </Link>
            </li>
            <li className='hover:text-coffee_3 transition duration-500'>
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
      </nav>
      <Menu show={showMenu} setShow={setShowMenu} />
    </>
  )
}

export default Nav
