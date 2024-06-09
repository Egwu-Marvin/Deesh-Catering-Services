import React from 'react'

export default function Home() {
  return (
    <main>
      <div>
        
      <p className='text-3xl font-bold text-orange-600 ml-[10%] -mb-[18%]'>
            <img src="/img/flying noodles.png" alt="Noodles" width={150} height={200} />
            Food Services</p>

            <p className='text-3xl font-bold text-orange-600 ml-[70%] -mb-[18%]'>
          <img src="/img/spicies5.png" alt="flying spicy frying pan" width={170} height={200} />
            Decoration Services</p>

        <span className='flex justify-center'> 

        <img src="/img/chef2.png" 
        alt="Chef"
        height={1} width={400} className='ml-[2%] ' />
        
        </span>

        <img src="/img/chef tools.png" 
        alt="Chef Tools"
        height={100} width={380} className='ml-[36.5%] -mt-[15%] ' />

        <img src="/img/deesh-logo.png" 
        alt="Deesh Logo"
        height={100} width={225} className='ml-[42.5%] -mt-[11.5%] ' />

        <p className='text-3xl font-bold text-orange-600 ml-[16%] -mt-[20%]'>
        <img src="/img/deesh-box.png" alt="Deesh Box" width={300} height={100} />
          Event Planning</p>

          <p className='text-3xl font-bold text-orange-600 ml-[63%] -mt-[20%]'>
        <img src="/img/deesh-bag.png" alt="Deesh Bag" width={250} height={100} />
          Groceries Shopping</p> 

        
        {/* <p className='bg-orange-700 mx-[400px] flex justify-center font-extrabold text-white'>Catering Services</p> */}
                
      </div>
    </main>
  )
}
