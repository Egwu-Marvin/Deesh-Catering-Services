import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between'>
        <ul>
          <li>
            <img src="/img/deesh-logo.png" alt="deesh logo" width={100} height={10} className=' ml-20 mt-2' />
            <span className='text-orange-700 ml-6 '>Experience The Taste Of Satisfaction</span>
          </li>
        </ul>
        
        <ul className='flex justify-center gap-7 text-xl text-orange-700 font-bold mt-2 mr-3'>
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
            <Link href="/">About Us</Link>
          </li>

          <li>
            <Link href="/">Talk With Us</Link>
          </li>
        </ul>
      </nav>

      <span className='bg-orange-700 flex justify-center py-4'></span>
    </div>
  )
}
