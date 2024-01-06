import React from 'react'
import { TransingText } from '../components/CustomText'
import SectionWrapper from '../HOC/SectionWrapper'
import { Styles } from '../Utils/Style'
import { aboutme } from '../Utils/Data'
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from '../Utils/motion'

const AboutSection = () => {
  return (
    <>
    <section className={`${Styles.paddingX} ${Styles.paddingY} mt-24`}>
        <TransingText title='About Me ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl' />


        <div className="flex md:flex-row flex-col justify-between mt-11">
            
            <div className="flex flex-col">
        <motion.h1 variants={textVariant(0.25)} className='sm:text-3xl text-xl font-bold dark:text-white py-3'>PERSONAL INFO'S</motion.h1>

          {aboutme.map((item, index) => (
        <motion.div variants={fadeIn("up", "tween", index * 0.50, 0.50)} key={item.personalInfo}>
          <div className='flex md:flex-row flex-col py-4 md:gap-14 gap-3'>
          <h1 className='sm:text-xl text-lg font-semibold'> <span className="text-gray-600 dark:text-gray-500">{item.personalInfo}</span> <span className="font-black poppins dark:text-white">{item.response}</span></h1>
          <h1 className='sm:text-xl text-lg font-semibold'> <span className="text-gray-600 dark:text-gray-500">{item.personalInfo2}</span> <span className="font-black poppins dark:text-white">{item.response2}</span></h1>
          </div>
          <hr className='md:hidden flex' />
        </motion.div>
          ))}
          </div>

          <div>
            <motion.p variants={textVariant(0.35)} className='font-semibold max-w-[610px] sm:leading-10 leading-8 sm:text-lg text-base md:mt-0 mt-10 dark:text-white'>
            <span className="font-extrabold text-xl">HI👋,</span> i'm Farouk, I'm a self-taught frontend developer with a passion for crafting modern, user-friendly interfaces for websites,
               I come from a background of self-learning in development, 
               I love coding and have seen myself grow through the years. Coding has become an everyday task for me,
               constantly expanding my skills from frontend to backend and exploring mobile development.
                <span className="font-extrabold text-2xl"> Frontend Development: </span> 
               Proficient in building responsive and intuitive UI/UX designs,
                Website to be responsive and functional across all devices.
               <span className="font-extrabold text-2xl"> Backend Skills: </span>
                 Exploring backend technologies to complement frontend expertise.
              <span className="font-extrabold text-2xl"> Mobile Development: </span>
               Venturing into mobile app development to diversify skill set.
               I'm actively seeking a role in frontend development to apply and further enhance my skills.
                My goal is to excel in the tech world by creating innovative and impactful solutions.
               I bring a dedicated approach to learning and problem-solving,
                constantly pushing boundaries to create exceptional user experiences across various platforms.
            </motion.p>
          </div>
          </div>
    </section>
    </>
  )
}

export default  SectionWrapper(AboutSection)