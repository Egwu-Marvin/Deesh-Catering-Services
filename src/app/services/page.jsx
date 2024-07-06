import React from 'react'
import ServiceImage from './ServiceImage'
import Image from 'next/image'


export const services = [
  // this connect with the SlugPage's inner images and other info.
  
  {name: "Wedding Planning",
    description: ["All the weddings that was planned by Deesh Catering Services and Event turns out to be one of the best ever seen in that environment. So, why not make yours the best in your environment also?"],
    category: "decoration",
    price: "N/A",
    visual: <Image src = {'/img/wedding.jpg'} alt = "Event Decoratio" width = {350} height = {100}/>
  },
  
  {name: "HiddenChef",
    description: ["All the weddings that was planned by Deesh Catering Services and Event turns out to be one of the best ever seen in that environment. So, why not make yours the best in your environment also?"],
    category: "decoration",
    price: "N/A",
    visual: <Image src = {'/img/chef6hide2.png'} alt = "Hidding chef" width = {200} height = {100}/>
  },
  
  {name: "House Opening",
    description: ["Let us make the opening of your house a moment you will never forget"],
    category: "decoration",
    price: "N/A",
    visual: <Image src = {'/img/house-open2.jpg'} alt = "house openning" width = {350} height = {100}/>
  },

  {name: "Birthday Planning",
    description: ["Happy birthday. We will make sure is a happy day."],
    category: "roasted",
    price: "N/A",
    visual: <Image src = {'/img/birthday.jpg'} alt = "Birthday" width = {600} height = {100}/>
  },

  {name: "Coperate Event",
    description: ["Work meetings and events can never be boring with us as your planner."],
    category: "decoration",
    price: "N/A",
    visual: <Image src = {'/img/coperat4.jpg'} alt = "Roasted Fish" width = {400} height = {100}/>
  },

  {name: "Amala with mgbegiri and round about meat",
    description: ["Well prepared amala with mgbegiri and round about meat"],
    category: "amala",
    price: "N/A",
    visual: <Image src = {'/img/Amala-deesh.jpg'} alt = "Amala from deesh" width = {200} height = {100}/>
  },

  {name: "Amala with mgbegiri and roasted fish",
    description: ["Well prepared amala with mgbegiri and roasted fish"],
    category: "amala",
    price: "N/A",
    visual: <Image src = {'/img/amala2.jpg'} alt = "Amala from deesh with fish" width = {200} height = {100}/>
  },

  {name: "Amala with asorted meats and fufu",
    description: ["Well prepared amala with and fufu with asorted meat"],
    category: "amala",
    price: "N/A",
    visual: <Image src = {'/img/AmalaFufu.jpg'} alt = "Amala from deesh with meats" width = {200} height = {100}/>
  },

  {name: "Asun",
    description: ["Asun with a well defined surname"],
    category: "amala",
    price: "N/A",
    visual: <Image src = {'/img/Asun.jpg'} alt = "Amala from deesh with meats" width = {200} height = {100}/>
  },

  {name: "Catfish pepper soup with ripped plantain",
    description: ["Deleciouse catfish pepper soup with ripped plantain"],
    category: "pepper soup",
    price: "N/A",
    visual: <Image src = {'/img/catfish-pepperSoup.jpg'} alt = "catfish peppersoup with ripped plantain" width = {200} height = {100}/>
  },

  {name: "Catfish pepper soup with ripped plantain",
    description: ["Ganished Soya"],
    category: "Roasted",
    price: "N/A",
    visual: <Image src = {'/img/dolores-preciado-7a--Ad6mkNE-unsplash.jpg'} alt = "Soya" width = {200} height = {100}/>
  },

  {name: "Soya",
    description: ["Ganished Soya"],
    category: "Roasted",
    price: "N/A",
    visual: <Image src = {'/img/soya.jpg'} alt = "Soya" width = {200} height = {100}/>
  },

  {name: "Fried Rice And asorted meat with salad Food Pack",
    description: ["Packs of fried rice with asorted meat and salad about to be delivered to a client from Deesh Catering and Event "],
    category: "Food pack",
    price: "N/A",
    visual: <Image src = {'/img/food packs2.Food pack'} alt = "fried rice" width = {200} height = {100}/>
    },

      {name: "Food Packs",
        description: ["Packs of fried rice with chicken about to be delivered to a client from Deesh Catering and Event....................... "],
        category: "Food pack",
        price: "N/A",
        visual: <Image src = {'/img/food packs.jpg'} alt = "fried rice" width = {700} height = {100}/>
      },

  {name: "Freezer Stocking",
    description: ["Packs of fried rice with asorted meat and salad about to be delivered to a client from Deesh Catering and Event "],
    category: "Food pack",
    price: "N/A",
    visual: <Image src = {'/img/freezerFoods1.jpg'} alt = "freezer stocking" width = {700} height = {100}/>
  },

  {name: "Fried Rice And white rice with saurced meat",
    description: ["Packs of Fried Rice And white rice with saurced meat about to be delivered to a client from Deesh Catering and Event "],
    category: "Food pack",
    price: "N/A",
    visual: <Image src = {'/img/food packs3.Food pack'} alt = "fried rice and white rice" width = {200} height = {100}/>
  },

  {name: "Fried Rice And white rice with saurced meat",
    description: ["Food tray of Fried Rice, white rice, jellof rice, saurced meat, fried chicken, cookies, fruits, wine and juice about to be delivered to a client from Deesh Catering and Event "],
    category: "food tray",
    price: "N/A",
    visual: <Image src = {'/img/Food tray.jpg'} alt = "food tray" width = {200} height = {100}/>
  },
]

export default function OurServices() {
  return (
      <div className='shadow-2xl shadow-orange-500'>
          <span className='flex justify-center -mb-[62.2%] mt-[7%]'>
        <img src="/img/chefs-bg.jpg" alt="planning" width={1350} height={200} />
        </span>

      <p className='flex justify-center pt-5 font-extrabold text-orange-700 text-4xl font-serif'>Some of the events we make easy and memorable for you</p>

      
    <div className='grid grid-cols-2 shadow-2xl shadow-orange-700 text-orange-600 font-extrabold '>

      <span className='z-10'>
        
      <ServiceImage src='/img/wedding.jpg' alt='Event Decoration' svName='Wedding Planning'/>
      </span>

      
      <ServiceImage src='/img/house-open2.jpg' alt='House window' svName='House Opening'/>
     

      
      <ServiceImage src='/img/one.jpg' alt='Birthday Decoration' svName='Birthday Planning'/>
     

      
      <ServiceImage src='/img/SHUGA-2.jpg' alt='coperate meeting' svName='Coperate Event'/>
     

      </div>

      <span>
      <span className='flex z-10 '>
        <img src="/img/chef6hide2.png" alt="hidden chef" svName='HiddenChef' width={700} height={200} className='-mt-[49.5%] ml-[26%] '/>
      </span>

        </span>
    </div>
  )
}
