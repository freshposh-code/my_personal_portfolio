import React, { useState, useEffect } from 'react';
import { Styles } from '../Utils/Style'
import {motion} from 'framer-motion'
import { fadeIn, slideIn } from '../Utils/motion';
import SectionWrapper from '../HOC/SectionWrapper';
import SocialIcons from '../components/SocialIcons';

const HeroSection = () => {
    const texts = ['Frontend Developer', 'Web Developer', 'React Developer', 'Web Designer']; 
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2150);
  
      return () => clearInterval(interval);
    }, [texts.length]);
  return (
    <>
      <section className={`${Styles.NavpaddingX} ${Styles.paddingY} mt-10 flex justify-between flex-col lg:flex-row overflow-x-hidden`}>
        <div>
      {texts.map((text, index) => (
        <motion.div variants={slideIn('left', 'tween', 0.10, 1)}
          key={index}
          className={`text-item ${index === currentTextIndex ? 'active' : ''}`}
        >
            <p className='font-extrabold sm:text-[3rem] xm:text-[2rem] text-[1.5rem] dark:text-white max-w-[680px] sm:leading-[70.6px] xm:leading-[60px] leading-[47px] capitalize'>
          HI there👋, <br className='md:flex hidden' /> Welcome to my portfolio. <br className='md:flex hidden' />
             My name is farouk Ayomide Olawuyi, I'm a <br /><span className="text-[#0000ff] sm:text-[3.7rem] xm:text-[2.1rem] text-[1.6rem]">{text}</span></p>

             <SocialIcons />

      <a href="/">
       <motion.button variants={fadeIn('up', 'tween', 0.99, 0.86)} className='bg-[#0000ff] text-[#f0f8ff] px-7 py-3 rounded-[33px] mt-4 text-xl'>Resume</motion.button>
       </a>
        </motion.div>
      ))}
      </div>

      <motion.div variants={fadeIn('left', 'tween', 0.15, 1)}  className='lg:mt-0 mt-[35rem] relative hero__border'> 
        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="myImage" className='sm:w-[420px] w-[400px] sm:h-[480px] h-[470px] object-cover' />
      </motion.div>
      </section>
    </>
  )
}

export default SectionWrapper(HeroSection)
