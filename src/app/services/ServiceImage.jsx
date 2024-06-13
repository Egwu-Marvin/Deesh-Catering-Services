import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServiceImage({src, alt, svName, contact}) {
  return (
    <div className=' p-10 mx-36 mt-7 border border-orange-700 border-x-[30px] border-r-yellow-600 border-t-0 '>
      <Link href={`/services/${svName.split(' ').join('-')}`} title={svName} contact={contact}>
      <Image src={src} alt={alt} width={500} height={100} className='w-[300px] h-[300px]'/>
      <p>{svName}</p>
      </Link>
    </div>
  )
}
