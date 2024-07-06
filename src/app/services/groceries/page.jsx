import React from 'react'
import Link from 'next/link'


export default function Groceries() {
  return (
    <div>
              
            <span className='flex justify-center -mb-[55%] mt-[16%] opacity-100'>
              <img src='/img/all-bg.jpg' alt='tomatoe bg' fill='true'/>
              </span>

            <div>

              <p className=' flex justify-center  mt-7 mb-[7%] font-bold text-4xl text-orange-700 font-serif'>
                What Do You Want Us To Shop for Today?
              </p>
        
            <Link href = '/contact'>
        <p className='text-3xl font-bold text-white ml-[10%] -mb-[20%]'>
              <img src="/img/spicies6.png" alt="spices in pan" width={300} height={200} />
              Spicies Shopping?</p>
  
              <p className='text-3xl font-bold text-white ml-[70%] -mb-[23%]'>
            <img src="/img/grocery2.png" alt="Groceries" width={230} height={200} className='ml-14'/>
            Groceries Shopping?</p>
            </Link>
  
  
              
          <span className='flex justify-center'> 
  
          <img src="/img/chef2.png" 
          alt="Chef"
          height={1} width={450} className='ml-[2%] ' />
          </span>
  
          
  
          <img src="/img/chef tools.png" 
          alt="Chef Tools"
          height={100} width={380} className='ml-[36.5%] -mt-[17%] ' />

          <p className=' flex justify-center -mb-[10%]  font-bold text-4xl text-orange-700 font-serif ml-[.5%] mt-[1%] '>
          We Can Make That Easy And More Affordable For You
          </p>


              <Link href= '/contact'>
          <p className='text-3xl font-bold text-black ml-[10%] -mt-[20%]'>
          <img src="/img/market2.jpg" alt="Market Place" width={250} height={100} />
            General Market Items?</p>
  
            <p className='text-3xl font-bold text-black ml-[70%] -mt-[17%]'>
          <img src="/img/deesh-bag.png" alt="Deesh Bag" width={260} height={100} className='-mb-9' />
            Gifts Items?</p> 
            </Link>
  
            </div>
  

          {/* <p className='bg-orange-700 mx-[400px] flex justify-center font-extrabold text-white'>Catering Services</p> */}
  
{/*                   
          <p className='-mt-[50%] ml-24 opacity-250'>
          <video autoPlay loop muted alt='food vid' width={1150} height={20} >
          <source src="/video/deesh-front.mp4" />
          </video>
          </p> */}
    </div>
  )
}
