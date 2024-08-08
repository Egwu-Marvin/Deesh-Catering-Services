import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const year = new Date().getFullYear()

export default function Footer() {
  return (
<footer>
      <div className='grid grid-cols lg:grid-cols-2' >
        <div className='flex justify-between p-7'>
      <section>
        <h2 className='font-bold text-xl text-orange-700'>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          {/* <li>
            <Link href="/">Our Venues</Link>
          </li> */}
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Talk With Us</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className='font-bold text-xl text-yellow-600'>Services</h2>
        <ul>
          <li>
            <Link href="/services/food">Catering Services</Link>
          </li>
          <li>
            <Link href="/services/groceries">Groceries Shopping</Link>
          </li>
          <li>
            <Link href="/services">Event Planning</Link>
          </li>
          <li>
            <Link href="/services">Decoration Services</Link>
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className='font-bold text-xl text-orange-700'>Care</h2>
        <ul>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/contact">Deliveries</Link>
          </li>
          <li>
            <Link href="/contact">Booking</Link>
          </li>
          
        </ul>
      </section>
      </div>

      <div>
      <section className='pl-40 sm:pl-80 lg:pl-40 md:pl-[20%] '>
        <h2 className='flex justify-center font-bold text-xl text-yellow-600'>Contact Us Through Our Whatsapp Group or Mails</h2>
        <h2 className='flex justify-center font-bold text-xl text-yellow-600'>To Place An Order </h2>
        <p>and for exclusive deals on <b>Market</b> and <b>Groceries Shopping </b> straight to your inbox</p>
      
                <form action="" method="post" className='flex justify-center p-3 mr-3'>              

                
                        <button type="submit" className='bg-orange-600 rounded-md p-2 ml-4 text-white '><Link href="tel:+2348060043822"> Phone </Link></button>
                        

                        <Link href='mailto:rozynwaoma@gmail.com'>
                        <button type="submit" className='bg-yellow-600 rounded-md p-2 ml-4 text-white '>MAIL</button>
                        </Link>
                </form>
                <p className='text-sm'>
                  By clicking you agree to with our <Link href='/' className='underline'>Privacy Policy</Link> and provide concent to recieve updates from us
                </p>
            
        </section>
        </div>


       </div>

       <div className=' text-orange-700'>
    
      <p className='bg-orange-700 py-3'></p>
          <div className='flex font-extrabold justify-center pl-9'>
            Copyright &copy; {year} Deesh Catering Services.
            <p className='pl-7 pr-3 '>
              Powered By
            </p>
            <Link href="https://class-project-five.vercel.app/">
            <Image src="/img/illumine-transperent.png" alt="Illumine Business Hub Logo" width={200} height={50} className='-ml-[40%] -mt-[15%]' />
            </Link>

            <p className='pr-2'>Designed By</p>
            <p className='text-xl pr-7'>Egwu Marvin Epie</p>
            </div>

          </div>
    

    
</footer>
  )
}
