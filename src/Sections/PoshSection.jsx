import React from 'react'
import SectionWrapper from '../HOC/SectionWrapper'
import { TypingText } from '../components/CustomText'
import {motion} from  'framer-motion'
import { zoomIn } from '../utils/motion'
import { Styles } from '../Utils/Style'

const PoshSection = () => {
  return (
    <section className={`${Styles.paddingY} mt-10`}>
        <div className="flex justify-center items-center">
        <TypingText title='Posh</>Code ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl absolute' />
        
        <div className="flex justify-center items-center">
        <motion.h1 variants={zoomIn(0.70, 1.2)} className='sm:text-6xl xm:text-5xl text-4xl -z-0 flex justify-center absolute text-[#5f5f5f43]'>PORTFOLIO</motion.h1>
        </div>
        </div>

    </section>
  )
}

export default SectionWrapper(PoshSection)