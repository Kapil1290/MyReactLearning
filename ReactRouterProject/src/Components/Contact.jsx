import React from 'react'


export default function Contact({email, mob}) {
  return (
    <div className=' bg-amber-100 h-140  w-full flex justify-center items-center flex-col gap-2'>
      <div>
        <p className='text-4xl font-bold'>Contact Us</p>
      <p className='text-xl '>Email:- {email}</p>
      <p className='text-xl '>Contact No:- {mob}</p>
      </div>
    </div>
  )
}
