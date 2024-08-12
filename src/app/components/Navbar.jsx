"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

  const [open, setOpen] = useState(true)

  function controlNav(){
    setOpen(!open)
  }
  return (
    <div>
      <nav className='flex justify-between '>
        <ul className='flex items-center '>
          <li>
            <Image src="/img/deesh-logo.png" alt="deesh logo" width={100} height={10} className=' ml-20 mt-2' />
            <span className='text-orange-700 ml-3 '>Experience The Taste Of Satisfaction</span>
          </li>
        </ul>
        
        <ul className={` md:flex ${open ? 'hidden' : 'flex flex-col'} flex justify-center gap-7 lg:text-xl md:text-sm text-orange-700 font-bold mt-2 mr-7`}>
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
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/contact">Talk With Us</Link>
          </li>
        </ul>
      </nav>

      <span className='bg-orange-700 flex justify-center py-[1.5%]'></span>
    </div>
  )
}
