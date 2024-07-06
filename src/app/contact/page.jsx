import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';





export default function Contact() {
  return (
    <div className='mt-7'>

        <span className='mb-7 '>
            <Image src='/img/banner.jpg' alt='bg banner' width={1400} height={200}/>
        </span>
        
      <div  className='grid grid-cols-2 pt-14 '>
      
      <span className='col-span-1 pl-28 -mt-[80%]'>
         <ul className='text-[.8rem] sm:text-[1rem] md:text-[1.3rem]'>
            <li className='text-orange-600 font-extrabold text-5xl mb-3'> Tell Us What You Want And Experience The Taste Of Satisfaction.</li>
            
            <span className='text-white'>
            <li className='flex'><p className='font-bold'>email:</p><Link href="mailto:rozynwaoma@gmail.com" target='_blank' >deeshservices@gmail.com</Link> </li>

            <li className='flex'> <p className='font-bold'>Call Or Whatsapp Us On:</p> <Link href="tel:+2348060043822"> +2348060043822 </Link></li>

            <li className='flex'> <p className='font-bold  '>address:</p> Jakande Estate, Lagos Nigeria. </li>
            </span>
            </ul>
     
      </span >

      <span className='-mt-[85%] mr-7'>
        <video autoPlay loop muted alt='tea pot vid' width={600} height={20} >
        <source src="/video/tea2.mp4"/>
        </video>
      </span>
        
     </div>


     <div className='-mt-[4%]'>
        <p  className='justify-center flex items-center text-2xl mt-4  font-black '>We Can Also Meet On Social Media Through </p>
        <div className='justify-center flex gap-16 text-orange-700 text-4xl'>

         <Link href='https://www.facebook.com/profile.php?id=100064147050726' target='blank'>
         <FaFacebookF/>
         </Link>

         <Link href="mailto:egwumarvin@gmail.com">
         <SiGmail/>
         </Link>

         <FaXTwitter/>

         <FaTiktok/>

         <FaInstagram/>

        </div>
        </div>

     </div>

     
    
    
  )
}