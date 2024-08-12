import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServiceImage({src, alt, svName, contact}) {
  return (
    <div className=' p-10 mx-36 mt-7 border border-orange-700 border-x-[5px] border-r-yellow-600 border-t-0 bg-white '>
      <Link href={`/services/${svName.split(' ').join('-')}`} title={svName} contact={contact}>
      <Image src={src} alt={alt} width={2500} height={100} className='w-[500px] h-[200.5px]'/>
      <p className='bg-white'>{svName}</p>
      </Link>
    </div>
  )
}
