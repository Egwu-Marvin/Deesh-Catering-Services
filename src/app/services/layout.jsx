import React from 'react'
import Link from 'next/link'

export default function layout({children}) {
  return (
    
    <div>
      <nav className='flex justify-evenly -mt-8 text-xl font-bold text-white'>
        <Link href='/services'>Event Planning</Link>
        <Link href='/services/groceries'>Groceries Shopping</Link>
        <Link href='/services/food'>Food Services</Link>
        {/* <Link href='/services/decoration'>Decoration Services</Link> */}
      </nav>

      {children}
    </div>
  )
}
