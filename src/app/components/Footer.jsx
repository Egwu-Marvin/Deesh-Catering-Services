import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
<footer>
      <div className='flex justify-between'>
      <section>
        <h2>Navigation</h2>
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
        <h2>Care</h2>
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
    </div>

    
</footer>
  )
}
