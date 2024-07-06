import React from 'react'
import { services } from '../page'

export default function page({params}) {
  const serviceSlu = services.find(service => service.name.split(' ').join('-') == params.serviceSlug)
  return (
    <div>
      <div className=''>
      <span className='text-6xl pb-7 flex justify-center pt-10 font-serif text-orange-700 font-extrabold shadow-lg shadow-yellow-700 '>
        {serviceSlu.name}
        </span>
        
        <span className='grid grid-cols-2 px-7 py-10 shadow-2xl shadow-yellow-600'>
          <span className=''>
        {serviceSlu.visual}
        </span>

        <span className='flex justify-center text-center shadow-2xl shadow-orange-700 mx-7 text-yellow-600 font-semibold'>
        {serviceSlu.description}
        </span>

        </span>
      </div>
    </div>
  )
}
