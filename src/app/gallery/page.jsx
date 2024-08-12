import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'


export default function gallery() {
  return (
    <div className='flex justify-center items-baseline  '>
      
      <p className='z-10 text-black mr-16'>Let us stock your freezer for you</p>
      <div className='mt-7'>

      <div className={`${styles.freezer}`}>
        <Image src="/img/freezer.jpg" alt='dark' width={200} height={100} className={`${styles.front}`}/>
        <Image src="/img/freezerFoods.jpg" alt='dark' width={200} height={100} className={`${styles.back}`}/>
      </div>
      </div>

    </div>
  )
}
