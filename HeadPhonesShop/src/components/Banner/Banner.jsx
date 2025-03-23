import React from 'react'
import Headphone4 from '../../assets/headphone4.png'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence,easeInOut, motion } from 'framer-motion'
import { fadeup } from '../Services/Services'
function Banner() {
  return (
    <>
    <section>
        <div className='container py-14 grid grid-cols-1 
        md:grid-cols-2 space-y-6 md:space-y-0 gap-12'>
            {/* Banner Image  */}
            <div>
                <motion.img 
                initial={{opacity:0,x:-100,rotate:-180}}
                whileInView={{opacity:1,x:0,rotate:0}}
                transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
                src={Headphone4} alt="" className='w-[300px]
                md:w-[400px] mx-auto'/>
            </div>
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left
                space-y-4 lg:max-[450px]'>
                    <motion.h1 variants={fadeup(0.7)}
                    initial="hidden" whileInView="show"
                    className='text-3xl lg:text-4xl
                    font-semibold font-poppins'>The Largest Headphones With The Latest Technology</motion.h1>
                    <motion.p variants={fadeup(0.9)}
                    initial="hidden" whileInView="show">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, 
                        et excepturi porro officiis, unde nihil architecto accusamus, quisquam aut 
                        doloribus reprehenderit!</motion.p>
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor:"white",
                        zIndex:9999,
                        followSpeed:0.5,
                        mixBlendMode:"difference",
                        scale:5,
                    }}>
                        <motion.button variants={fadeup(1.3)}
                    initial="hidden" whileInView="show"className='border-2 border-[#e33343]
                      px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white'>Shonp Now</motion.button>
                    </UpdateFollower>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner