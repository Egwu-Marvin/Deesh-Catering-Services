import React from 'react'
import ServiceImage from '../ServiceImage'

export default function Food() {
  return (
    <div className=''>
      <p className='flex justify-center mr-[25%] mt-7 mb-4 font-bold text-4xl text-orange-700 font-serif'>
         Let Us Help Make Sure Your Plates Are Never Empty
      </p>
         <p className='flex justify-center mr-[30%] mb-4 font-bold text-orange-700 font-serif'>Through Our</p>

         
      <span className='flex justify-center '>
        
        <span className='mr-[55%] opacity-100 shadow-2xl shadow-yellow-700 border-t-8 border-black'>
        <video autoPlay loop muted alt='food vid' width={1350} height={20} >
        <source src="/video/Food Clip.mp4" />
        </video>
        </span>
        
          <img src="/img/chef3.png" alt="chef3" width={550} height={300} className=' -mt-24 -ml-[82.5%] z-30' />
          
        </span>

        

        <div className='flex justify-center -mt-[35%] mr-[10%] '>

          <span className='z-20 -mr-40 text-white font-extrabold font-serif text-6xl'>
          <ServiceImage src='/img/food packs2.jpg' alt='food packs' svName='Food Packs' />
          </span>

          <p className='z-30 -mr-40 text-white font-extrabold font-serif text-8xl'>And</p>

          <span className=' mr-60 text-white font-extrabold font-serif text-6xl z-20'>
          <ServiceImage src='/img/freezer.jpg' alt='food packs' svName='Freezer Stocking' />
          </span>



        </div>
          
    </div>
  )
}
