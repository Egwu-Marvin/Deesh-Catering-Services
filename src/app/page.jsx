import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' shadow-2xl shadow-orange-600 mt-7 -z-50'>

<p className='flex justify-center  ml-60  font-bold text-6xl text-orange-700 font-serif z-50'>
          We Assure You Only The Best In....
        </p>

        <span className='flex  justify-center mb-[8%] -z-50 '>
            <Image src='/img/bg4b.jpg' alt='bg banner' width={1400} height={200}/>
        </span>

      <div>

        <div className='flex justify-center -mt-[68%]'>

        <div className='flex -mr-[55%] z-10'>
        <img src="/img/chef72.png" alt="chef" width={550} height={200}  />

        <section className='pl-40 sm:pl-80 lg:pl-40 -ml-[78%] mt-[105%] '>
        <h2 className='flex justify-center font-bold text-3xl text-orange-600'>Contact Us On</h2>

                <form action="" method="post" className='flex  text-sm'>              

                
                        <button type="submit" className='bg-yellow-500 rounded-md p-2 ml-4 text-white '><Link href="tel:+2348060043822"> Call/Whasapp </Link></button>
                        

                        <Link href='mailto:egwumarvin@gmail.com'>
                        <button type="submit" className='bg-yellow-500 rounded-md p-2 ml-4 text-white '>MAIL</button>
                        </Link>
                </form>
            
        </section>
        </div>

        <div  className='flex justify-center -mt-[0%] -mr-[10%] ' >

          <span className='z-30 mr-[20%] mt-[113%] text-yellow-500 font-extrabold font-serif text-xl border-hidden border-orange-600 border-8 hover:bold '>

          <Link href= '/services'>
          <img src="/img/two.jpg" alt="Event Center By Deesh" width={170} height={200} />

            <p className='flex justify-center text-4xl shadow-lg shadow-red-600'>Event</p>
            <p className='flex justify-center text-2xl shadow-lg shadow-red-600'>Planning</p>
          </Link>
          </span>
          
          <span className='z-20 mr-[20%] mt-[113%] text-orange-600 font-extrabold font-serif text-xl border-none  border-8'>
          <Link href = '/services/groceries'>
          <img src="/img/grocery2.png" alt="Food Stuffs By Deesh" width={250} height={200} />
          <p className='flex justify-center text-3xl shadow-lg shadow-red-600'>Groceries</p>
          <p className='flex justify-center text-2xl shadow-lg shadow-red-600'>Shopping</p>
          </Link>
          </span>
          
          <span className='flex justify-center z-30 -mr-[247%] mt-[120%] text-yellow-500 font-extrabold font-serif border-none border-orange-600 border-8'>
          <Link href = '/services/food'>
          <img src="/img/outfood.jpg" alt="Food In Chefing Deeshes" width={180} height={200}  />
          <p className='flex justify-center text-3xl shadow-lg shadow-red-600'>Catering</p>
          <p className='flex justify-center text-2xl shadow-lg shadow-red-600'>Services</p>
          </Link>
          </span>

        </div>

        <div className=' opacity-300 mt-[10%] '>
        <video autoPlay loop muted alt='food vid' width={1250} height={20} >
        <source src="/video/deesh-front4.mp4"/>
        </video>
        </div>

        </div>
          
        
          </div>

    </main>
  )
}
