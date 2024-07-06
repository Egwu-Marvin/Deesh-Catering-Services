import Image from 'next/image'
import React from 'react'


export default function About() {
  return (
    <div className='max-w-[100%] text-xl'>  
      <div className='grid grid-cols-2 items-center pl-20 md:pl-40 lg:pl-52 pt-8'>
      <p><span>Deesh Events And Catering Services</span> That&apos;s.</p>

      <div className='-ml-[50%]'> 
      <Image src='/img/deesh-jellof.jpg' alt='Deesh Jellof Rice' width={700} height={200} className='-z-10  pl-[30%] '  />
         
      </div>
      </div>

      <div  className='grid grid-cols-2 items-center pl-20 md:pl-40 lg:pl-52 pt-32'>
      
      
        <p className=''>Deesh Events And Catering Services</p>

        <div>
          <Image src='/img/Asun.jpg' alt='Asun' width={400} height={300}  />
        </div>

      </div>

      <div className=''>
        <h2 className='flex justify-center pb-10 font-black text-3xl '>Some Of Our Customers
        </h2>
        <div className='flex space-x-16 justify-center  animate-bounce overflow-hidden'>
          <Image src='/img/TecnoLogo.png' alt='TecnoLogo' width={70} height={100} />
          <Image src='/img/samsungLogo.png' alt='SamsungLogo' width={70} height={100} />
          <Image src='/img/appleLogo.jpg' alt='AppleLogo' width={70} height={100} />
          <Image src='/img/redmiLogo.png' alt='RemiLogo' width={70} height={100} />
          <Image src='/img/oraimoLogo.jpg' alt='OraimoLogo' width={70} height={100} />
          <Image src='/img/jebraLogo.jpg' alt='JebraLogo' width={70} height={100} />
          <Image src='/img/univelcity_logo.jpg' alt='UnivelcityLogo' width={70} height={100} className='max-w-none'/>
          <Image src='/img/itelLogo.jpg' alt='ItelLogo' width={70} height={100} />
          
          <Image src='/img/hpLogo.jpg' alt='HpLogo' width={70} height={100} />

          <Image src='/img/newAgeLogo.jpg' alt='NewAgeLogo' width={70} height={100} />

        </div>

      </div>
    </div>
  )
}