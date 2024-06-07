import React from 'react'

export default function Home() {
  return (
    <main>
      <div>

        <span className='flex justify-center'>

          <p className='mt-[100px] ml-[200px] bg-orange-700 mb-[450px] text-white font-bold '>Food Services</p>
          <p className='mt-[400px] bg-orange-700 mb-[140px] text-white font-bold'>Event Planning</p>

        <img src="/img/chef2.png" 
        alt="Chef"
        height={500} width={400} className='flex justify-between ' />

        <p className='mt-[100px] -mr-[250px]  bg-orange-700 mb-[450px] font-bold text-white '>Decoration Services</p>
        <p className='mt-[400px] bg-orange-700 mb-[140px] mr-[350px] font-bold text-white'>Grosceries Shopping</p>

        </span>

        
        <p className='bg-orange-700 mx-[400px] flex justify-center font-extrabold text-white'>Catering Services</p>
                
      </div>
    </main>
  )
}
