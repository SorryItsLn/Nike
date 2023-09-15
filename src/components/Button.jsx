import React from 'react'
import icon from '../assets/icons/arrow-right.svg'

const Button = ({label, iconURl}) => {
  return (
   <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red'>
        {label}
        <img src={icon} alt="arrow right" 
             className='ml-2 rounded-full w-5 h-5 '
        />

    </button>
  )
}

export default Button