import React, { useState } from 'react'
import Headphone1 from "../../assets/headphone.png"
import Headphone2 from "../../assets/headphone2.png"
import Headphone3 from "../../assets/headphone3.png"
import { FaWhatsapp } from "react-icons/fa"
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence,easeInOut, motion } from 'framer-motion'
const fadeup=(delay)=>{
  return{
    hidden:{
      opacity:0,
      y:100,
      scale:0.5,
    },
    show:{
      opacity:1,
      y:0,
      scale:1,
      transition:{
        duration:0.5,
        delay:delay,
        ease:easeInOut,
      },
    },
    exit:{
      opacity:0,
      y:50,
      scale:0.5,
      transition:{
        duration:0.2,
        ease:easeInOut,
      },
    }
  }
}
const headPhoneData=[
  {
    id:1,
    image:Headphone1,
    title:"Wireless Headphone 1",
    subtitles:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis earum, culpa iure maiores sed dolore architecto cum. Laudantium sunt modi explicabo ad, voluptatem ut numquam voluptate maxime repellat maiores?",
    price:"$100",
    model:"Model Brown",
    bgColor:"#8b5958",
  },
  {
    id:2,
    image:Headphone2,
    title:"Wireless Headphone 2",
    subtitles:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis earum, culpa iure maiores sed dolore architecto cum. Laudantium sunt modi explicabo ad, voluptatem ut numquam voluptate maxime repellat maiores?",
    price:"$100",
    model:"Lime Green",
    bgColor:"#638153",
  },
  {
    id:3,
    image:Headphone3,
    title:"Wireless Headphone 3",
    subtitles:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis earum, culpa iure maiores sed dolore architecto cum. Laudantium sunt modi explicabo ad, voluptatem ut numquam voluptate maxime repellat maiores?",
    price:"$100",
    model:"Ocean Blue",
    bgColor:"#5d818c",
  },
]
function Hero() {
  const[activeData,setActiveData]=useState(headPhoneData[0]);
  const handleActiveData=(data)=>{
    setActiveData(data);
  }
  return (
    <>
    <section className='bg-brandDark text-white font-varela'>
        <div className="container grid grid-cols-1
         md:grid-cols-2 min-h-[700px]">
            {/* Headphone info */}
            <div className='flex flex-col justify-center
            py-14 md:py-0 xl:max-w-[500px]'>
              <div className='space-y-5 text-center md:text-left'>
                {/* headphone title */}
                <UpdateFollower
                mouseOptions={{
                  backgroundColor:"white",
                  zIndex:9999,
                  followSpeed:0.5,
                  rotate:-720,
                  mixBlendMode:"difference",
                  scale:10,
                }}>
                  <AnimatePresence mode="wait">
                    <motion.h1 key={activeData.id} 
                    variants={fadeup(0.2)} initial="hidden"
                    animate="show" exit="exit"
                    className='text-3xl lg:text-6xl
                    font-varela font-bold'>{activeData.title}</motion.h1>
                  </AnimatePresence> 
                </UpdateFollower>
                <UpdateFollower
                mouseOptions={{
                  backgroundColor:"white",
                  zIndex:9999,
                  followSpeed:0.5,
                  rotate:-720,
                  mixBlendMode:"difference",
                  scale:5,
                }}>
                <AnimatePresence mode='wait'>
                  <motion.p 
                  key={activeData.id}
                  variants={fadeup(0.3)} initial="hidden"
                  animate="show" exit="exit"
                  className='text-sm leading-loose
                text-white'>{activeData.subtitles}</motion.p>
                </AnimatePresence>
                </UpdateFollower>
                {/* buy and listen  */}
                <AnimatePresence mode='wait'>
                  <UpdateFollower
                  mouseOptions={{
                  backgroundColor:activeData.bgColor,
                  zIndex:9999,
                  followSpeed:0.5,
                  rotate:-720,
                  scale:6,
                  backgroundElement:<div><img src={activeData.image} className="" /></div>
                  }}>
                    <motion.button key={activeData.id}
                    variants={fadeup(0.4)} initial="hidden"
                    animate="show" exit="exit"
                    style={{backgroundColor:activeData.bgColor}}
                    className='px-4 py-2 inline-block 
                    font-normal rounded-sm'>Buy and Listen</motion.button>
                  </UpdateFollower>
                </AnimatePresence>                
                {/* headphones list Seperator */}
                <div className='flex items-center justify-center md:justify-start
                 gap-4 !mt-24'>
                  <div className='w-20 h-[1px] bg-white'></div>
                  <p className='uppercase text-sm'>Top Headphones for you</p>
                  <div className='w-20 h-[1px] bg-white'></div>
                </div>
                {/* headphone list switcher */}
                <div className='grid grid-cols-3 gap-10'>
                  {headPhoneData.map((item)=>{
                    return(
                      <UpdateFollower
                      mouseOptions={{
                        backgroundColor:item.bgColor,
                        zIndex:9999,
                        followSpeed:0.5,
                        scale:5,
                        text:"View Details",
                        textFontSize:"3px",
                      }}>
                          <div key={item.id} 
                        onClick={()=>handleActiveData(item)} className='grid grid-cols-2 place-items-center
                        cursor-pointer'>
                          <div>
                            <img className='rounded-full w-[200px]' src={item.image} alt="" />
                          </div>
                          <div className='space-y-2'>
                            <p className='text-base font-bold'>{item.price}</p>
                            <p className='text-xs font-normal
                            text-nowrap'>{item.model}</p>
                          </div>
                        </div>
                      </UpdateFollower>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* Headphone Image */}
            <div 
            className='flex flex-col justify-end items-center'>
              <AnimatePresence mode='wait'>
                <motion.img
                key={activeData.id} 
                initial={{opacity:0,scale:0.9,y:100}}
                animate={{opacity:1,scale:1,y:0}}
                transition={{duration:0.4,delay:0.2,ease:easeInOut}}
                exit={{opacity:0,scale:0.9,y:100,
                  transition:{
                    duration:0.2,
                  },
                }}
                src={activeData.image} alt="" className="w-[300px]
                md:w-[400px] xl:w-[550px]" />
             </AnimatePresence>
           </div>
            {/* WhatsApp icon */}
            <div className='text-3xl text-white
                fixed bottom-10 right-10 hover:rotate-[360deg]
                duration-500 z-[99999] mix-blend-difference'>
              <a href="">
                <FaWhatsapp />
              </a>
            </div> 
        </div>
    </section>
    </>
    
  )
}

export default Hero