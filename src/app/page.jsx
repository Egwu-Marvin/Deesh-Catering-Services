import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
   
   <main className='grid grid-cols-1 shadow-2xl shadow-orange-600 mt-7 -z-50'>

<p className='flex justify-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl text-orange-700 font-serif z-50'>
          We Assure You Only The Best In....
        </p>

        <span className='flex justify-center mb-[8%] -z-50'>
            <Image src='/img/bg4b.jpg' alt='bg banner' width={1400} height={200}/>
        </span>

      <div>

        <div className='flex justify-center -mt-[68%]'>


        <div className='grid lg:-mr-[35%] md:-mr-[35%] sm:-mr-[65%] -mr-[60%]  z-10' >
          
        <Image src="/img/chef72.png" alt="chef" width={540} height={50} className='lg:mb-[30%] md:mb-[67%] sm:mb-[50%] mb-[99%] lg:w-[97%] md:w-[97%] sm:w-[82%] w-[77.7%] ' />
        
        </div>
        

        <div  className='grid lg:grid-cols-3 grid-cols-3 gap-7 items-end  ml-[35%] lg:mb-[19.5%] md:mb-[30%] sm:mb-[76%] mb-[66%] lg:mr-[0%] md:mr-[0%] sm:mr-[11%] ' >

          <span className='z-30 flex text-yellow-500 font-extrabold font-serif text-xl border-hidden border-orange-600 border-8  '>

          <Link href= '/services'>
          <Image src="/img/two.jpg" alt="Event Center By Deesh" width={170} height={200} />

            <p className='flex justify-center text-4xl shadow-lg shadow-red-600'>Event</p>
            <p className='flex justify-center text-2xl shadow-lg shadow-red-600'>Planning</p>
          </Link>
          </span>
          
          <span className='z-20  text-orange-600 font-extrabold font-serif text-xl border-none  border-8'>
          <Link href = '/services/groceries'>
          <Image src="/img/grocery2.png" alt="Food Stuffs By Deesh" width={250} height={200} />
          <p className='flex justify-center text-3xl shadow-lg shadow-red-600'>Groceries</p>
          <p className='flex justify-center text-2xl shadow-lg shadow-red-600'>Shopping</p>
          </Link>
          </span>
          
          <span className='flex justify-center z-30  text-yellow-500 font-extrabold font-serif border-none border-orange-600 border-8'>
          <Link href = '/services/food'>
          <Image src="/img/outfood.jpg" alt="Food In Chefing Deeshes" width={180} height={200}  />
          <p className='flex justify-center text-3xl shadow-lg shadow-red-600'>Catering</p>
          <p className='flex justify-center text-2xl shadow-lg shadow-red-600'>Services</p>
          </Link>
          </span>

          {/* <section className='lg:pl-40 lg:-ml-[68%] lg:mt-[85%] z-30'>
        <h2 className='flex justify-center font-bold text-3xl text-orange-600'>Contact Us On</h2>

                <form action="" method="post" className='flex  text-sm'>              

                
                        <button type="submit" className='bg-yellow-500 rounded-md p-2 ml-4 text-white '><Link href="tel:+2348060043822"> Call/Whasapp </Link></button>
                        

                        <Link href='mailto:egwumarvin@gmail.com'>
                        <button type="submit" className='bg-yellow-500 rounded-md p-2 ml-4 text-white '>MAIL</button>
                        </Link>
                </form>
        </section> */}

        </div>


        </div>
          
        <div className=' opacity-300 -mt-[115%] lg:-mt-[77%] md:-mt-[90%] sm:-mt-[119%] ml-[10%] '>
        <video autoPlay loop muted alt='food vid' width={1250} height={20} >
        <source src="/video/deesh-front4.mp4"/>
        </video>
        </div>
        
          </div>

    </main>
  )
}
