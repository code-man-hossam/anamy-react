import React from 'react'
import {
  FaRegPaperPlane,
  FaMapMarkedAlt,
  FaEnvelope,
  FaFacebook,
  FaLaptopCode,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import { FiPhoneIncoming } from 'react-icons/fi'

const Footer = () => {
  return (
    <section className='w-full bg-coffee_2 flex flex-col items-center mt-7 px-10 pt-10'>
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-3xl awesome text-coffee_1 mb-5'>What's Next?</h1>
        <a
          href='mailto:anamygroup2@gmail.com'
          className='w-48 flex pb-1 text-coffee_1 text-sm px-1 items-center justify-between border-b border-coffee_1 transition duration-500 hover:bg-coffee_1 hover:text-coffee_2'
        >
          <span>reach out</span>
          <FaRegPaperPlane />
        </a>
      </div>
      <div className='w-4/5 mx-auto grid md:grid-cols-2 my-5 pb-5 border-b border-coffee_1'>
        <div className='flex flex-col items-start justify-between'>
          <p className='text-sm text-coffee_1 flex mb-3'>
            <span className='mr-5'>
              <FaMapMarkedAlt />
            </span>
            The Arab Market, South of China Al-Qandoul – Wad Elias Building, 3rd
            Floor, Office No(1)- Khartoum - Sudan-11111
          </p>
          <p className='text-sm text-coffee_1 flex mb-3'>
            <span className='mr-5'>
              <FiPhoneIncoming />
            </span>
            +249-183766926
          </p>
          <p className='text-sm text-coffee_1 flex mb-3'>
            <span className='mr-5'>
              <FaEnvelope />
            </span>
            anamygroup2@gmail.com
          </p>
        </div>
        <div className='flex flex-col items-start mt-5 md:mt-0 md:items-center justify-between'>
          <a
            href='https://www.facebook.com/AnamyForMultiactivtiesCoLtd/'
            target='_blank'
            rel='noreferrer'
            className='w-28 flex items-center text-coffee_1 text-sm mb-3'
          >
            <span className='mr-3'>
              <FaFacebook />
            </span>
            Facebook
          </a>
          <a
            href='https://code-man-hossam.github.io/portfolio/'
            target='_blank'
            rel='noreferrer'
            className='w-28 flex items-center text-coffee_1 text-sm mb-3'
          >
            <span className='mr-3'>
              <FaLaptopCode />
            </span>
            Anamy's Tech
          </a>
          <a
            href='/'
            className='w-28 flex items-center text-coffee_1 text-sm mb-3'
          >
            <span className='mr-3'>
              <FaLinkedinIn />
            </span>
            LinkedIn
          </a>
          <a
            href='https://instagram.com/anamygroup?utm_medium=copy_link'
            target='_blank'
            rel='noreferrer'
            className='w-28 flex items-center text-coffee_1 text-sm mb-3'
          >
            <span className='mr-3'>
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      <p className='text-coffee_1 text-xs md:text-sm mb-3'>
        &copy; ALLRIGHTS RESERVED, ANAMY 2021
      </p>
    </section>
  )
}

export default Footer
