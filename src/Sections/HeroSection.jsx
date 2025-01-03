import React, { useState, useEffect } from 'react';
import { Styles } from '../Utils/Style'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../Utils/motion';
import SectionWrapper from '../HOC/SectionWrapper';
import SocialIcons from '../components/SocialIcons';
import { portfolioimage } from '../assets';

const HeroSection = () => {
  const texts = ['Frontend Developer', 'Web Developer', 'React Developer'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2150);

    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <>
      <section className={`${Styles.NavpaddingX} ${Styles.paddingY} mt-10 flex justify-between flex-col lg:flex-row overflow-x-hidden overflow-y-hidden`}>
        <div>
          {texts.map((text, index) => (
            <motion.div variants={slideIn('left', 'tween', 0.10, 1)}
              key={index}
              className={`text-item ${index === currentTextIndex ? 'active' : ''}`}
            >
              <p className='font-extrabold sm:text-[3rem] xm:text-[1.7rem] text-[1.5rem] dark:text-white lg:max-w-[680px] w-full sm:leading-[70.6px] xm:leading-[60px] leading-[47px] capitalize'>
                HI there👋, <br className='md:flex hidden' /> Welcome to my portfolio. <br className='md:flex hidden' />
                My name is farouk Ayomide Olawuyi, I'm a <br /><span className="text-blue-600 sm:text-[3.7rem] xm:text-[1.7rem] text-[1.6rem]">{text}</span></p>

              <SocialIcons />

              <a href="https://docs.google.com/document/d/1o_jGUO5rOwigRPWc7O8MEaxxWD7_yX-g/edit?usp=sharing&ouid=116302030462369913828&rtpof=true&sd=true" target='_blank'>
                <motion.button variants={fadeIn('up', 'tween', 0.99, 0.86)} className='bg-blue-600 text-[#f0f8ff] px-7 py-3 rounded-[33px] mt-4 text-xl font-bold tracking-[1.7px]'>Resumé</motion.button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn('left', 'tween', 0.15, 1)} className='lg:mt-0 mt-[35rem] relative hero__border'>
          <div className="grayscale-0 hover:grayscale-0 duration-[2000ms] dark:grayscale">
            <img src={portfolioimage} alt="myImage" className='sm:w-[420px] w-[400px] sm:h-[480px] h-[470px] object-cover' />
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default SectionWrapper(HeroSection)
