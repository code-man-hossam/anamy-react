import React, { useState } from 'react'
import {
  FaFacebook,
  FaLaptopCode,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const Social = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='w-12 h-56 fixed bottom-12 left-12 z-10'>
      <button
        className='absolute w-10 h-10 bottom-0 font-luki bg-coffee_1 border border-coffee_2 text-coffee_2 text-2xl cursor-pointer rounded-full z-20'
        onClick={() => setShow(!show)}
      >
        A
      </button>
      <div className='absolute w-11/12 h-3/4 flex flex-col items-center justify-around transition duration-700'>
        <a
          href='https://www.facebook.com/AnamyForMultiactivtiesCoLtd/'
          target='_blank'
          rel='noreferrer'
          className={`absolute bottom-0 w-7 h-7 flex items-center justify-center border rounded-full bg-coffee_2 border-coffee_1 text-coffee_1 text-lg cursor-pointer transition  duration-700 transform ${
            show ? 'translate-y-btn1 z-10 rotate-cos' : 'translate-y-12 z-0'
          }`}
        >
          <FaFacebook />
        </a>

        <a
          href='https://code-man-hossam.github.io/portfolio/'
          target='_blank'
          rel='noreferrer'
          className={`absolute bottom-0 w-7 h-7 flex items-center justify-center border rounded-full bg-coffee_2 border-coffee_1 text-coffee_1 text-lg cursor-pointer transition  duration-700 transform ${
            show ? 'translate-y-btn2 z-10 rotate-cos' : 'translate-y-12 z-0'
          }`}
        >
          <FaLaptopCode />
        </a>

        <a
          href='https://instagram.com/anamygroup?utm_medium=copy_link'
          target='_blank'
          rel='noreferrer'
          className={`absolute bottom-0 w-7 h-7 flex items-center justify-center border rounded-full bg-coffee_2 border-coffee_1 text-coffee_1 text-lg cursor-pointer transition  duration-700 transform ${
            show ? 'translate-y-btn3 z-10 rotate-cos' : 'translate-y-12 z-0'
          }`}
        >
          <FaInstagram />
        </a>

        <a
          href='/'
          className={`absolute bottom-0 w-7 h-7 flex items-center justify-center border rounded-full bg-coffee_2 border-coffee_1 text-coffee_1 text-lg cursor-pointer transition  duration-700 transform ${
            show ? 'translate-y-btn4 z-10 rotate-cos' : 'translate-y-12 z-0'
          }`}
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className='absolute w-52 h-8 left-1.5 bottom-0'>
        <div className='absolute w-full h-full'>
          <article
            className={`absolute w-7 h-7 flex items-center justify-center rounded-full text-coffee_2 text-lg font-luki cursor-pointer bg-coffee_1 border border-coffee_2 transiton duration-700 transform ${
              show ? 'translate-x-letter1 rotate-cos z-10' : 'translate-x-0 z-0'
            }`}
          >
            N
          </article>
          <article
            className={`absolute w-7 h-7 flex items-center justify-center rounded-full text-coffee_2 text-lg font-luki cursor-pointer bg-coffee_1 border border-coffee_2 transiton duration-700 transform ${
              show ? 'translate-x-letter2 rotate-cos z-10' : 'translate-x-0 z-0'
            }`}
          >
            A
          </article>
          <article
            className={`absolute w-7 h-7 flex items-center justify-center rounded-full text-coffee_2 text-lg font-luki cursor-pointer bg-coffee_1 border border-coffee_2 transiton duration-700 transform ${
              show ? 'translate-x-letter3 rotate-cos z-10' : 'translate-x-0 z-0'
            }`}
          >
            M
          </article>
          <article
            className={`absolute w-7 h-7 flex items-center justify-center rounded-full text-coffee_2 text-lg font-luki cursor-pointer bg-coffee_1 border border-coffee_2 transiton duration-700 transform ${
              show ? 'translate-x-letter4 rotate-cos z-10' : 'translate-x-0 z-0'
            }`}
          >
            Y
          </article>
        </div>
      </div>
    </div>
  )
}

export default Social
