import React from 'react'
import SectionWrapper from '../HOC/SectionWrapper'
import { TransingText } from '../components/CustomText'
import {motion} from  'framer-motion'
import { fadeIn, textVariant, zoomIn } from '../Utils/motion'
import { Styles } from '../Utils/Style'
import { poshcode } from '../Utils/Data'

const PoshSection = () => {
  return (
    <section className={`${Styles.paddingY} ${Styles.paddingX} mt-10`}>
        <div className="flex justify-center items-center">
        <TransingText title='Posh</>Code ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl absolute' />
        
        <div className="flex justify-center items-center">
        <motion.h1 variants={zoomIn(0.70, 1)} className='sm:text-7xl xm:text-5xl text-4xl -z-0 flex justify-center absolute text-[#51515143]'>PORTFOLIO</motion.h1>
        </div>
        </div>
         
         <div className="mt-10">

          <motion.h1 variants={textVariant(0.30)} className='font-bold sm:text-lg text-base py-4 text-center dark:text-white leading-7'>As a passionate developer, I thrive on collaboration, harnessing collective strengths
             to craft innovative solutions. I bring creativity
             to the forefront, not just in design but also in strategic planning,
              ensuring each project is meticulously mapped out before implementation. Apart from tech, I'm passionate about [hobbies/interests],
               finding inspiration and balance outside the digital realm.</motion.h1>

        <div className="flex flex-wrap gap-12">
          {poshcode.map((item) => (
            <div key={item.poshHeader}>
        <TransingText title={item.poshHeader} textStyles='font-bold text-2xl max-w-fit hover:border-blue-700 border-b-4 duration-300' />
        
          <div className="flex flex-wrap item-center mt-2 font-semibold gap-5 text-white dark:text-black">
            {item.description.map((sub, index) => (
          <motion.div variants={fadeIn('up', 'tween', index* 0.5, 0.55)} className="flex items-center flex-wrap bg-[#000] px-5 py-2 rounded-[33px]">
            <span className='w-[6px] h-[6px] mx-1 rounded-[50%] bg-white dark:bg-black '/><p>{sub.poshDesc}</p></motion.div>
            ))}
          </div>
          </div>
          ))} 
        </div>
        

        </div>
    </section>
  )
}

export default SectionWrapper(PoshSection)