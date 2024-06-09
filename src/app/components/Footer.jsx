import React from 'react'
import Link from 'next/link'

const year = new Date().getFullYear()

export default function Footer() {
  return (
<footer>
      <div className='flex justify-between mt-7 px-7'>
      <section>
        <h2 className='font-bold text-xl'>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Our Services</Link>
          </li>
          <li>
            <Link href="/">Our Venues</Link>
          </li>
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Talk With Us</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className='font-bold text-xl'>Services</h2>
        <ul>
          <li>
            <Link href="/">Catering Services</Link>
          </li>
          <li>
            <Link href="/">Groceries Shopping</Link>
          </li>
          <li>
            <Link href="/">Event Planning</Link>
          </li>
          <li>
            <Link href="/">Decoration Services</Link>
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className='font-bold text-xl'>Care</h2>
        <ul>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/">Deliveries</Link>
          </li>
          <li>
            <Link href="/">Booking</Link>
          </li>
          <li>
            <Link href="/">Returns</Link>
          </li>
        </ul>
      </section>

      <div>
      <section className='pl-40 sm:pl-80 lg:pl-40 '>
        <h2 className='font-bold text-xl'>Subscribe</h2>
        <p>Join our newsletter and get vouchers and exclusive deals straight to your inbox</p>
      
                <form action="" method="post" className='p-3 flex mr-3'>              
                        <input placeholder="Enter Your Email Please" id="email" name="email" type="email" className='bg-orange-600 text-white rounded-md '/> 
                    
                        <button type="submit" className='bg-yellow-600 rounded-md p-2 ml-4 text-white '>SUBSCRIBE</button>
                </form>
                <p className='text-sm'>
                  By subscribing you agree to with our <Link href='/' className='underline'>Privacy Policy</Link> and provide concent to recieve updates from us
                </p>
            
        </section>
        </div>


       </div>
    
      <p className='bg-orange-700 py-3'></p>
          <div className='flex font-extrabold justify-center'>
            Copyright &copy; {year} Deesh Catering Services.
            <p className='pl-24 '>
              Powered By
            </p>
            <Link href="https://class-project-five.vercel.app/">
            <img src="/img/illumine-transperent.png" alt="Illumine Business Hub Logo" width={200} height={50} className='-ml-[40%] -mt-[15%]' />
            </Link>

            <p>Designed By</p>
            <p className='text-xl pl-2'>Egwu Marvin Epie</p>
          </div>
    

    
</footer>
  )
}
