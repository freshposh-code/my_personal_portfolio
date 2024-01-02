import React from 'react'
import { staggerContainer } from '../utils/motion'
import {motion} from 'framer-motion'

const SectionWrapper = (Component) => function HOC() {
  return (
    <motion.section initial='hidden' whileInView='show' 
    viewport={{once: false, amount: 0.25}}
     variants={staggerContainer()}>
        <Component />
    </motion.section>
  )
}

export default SectionWrapper
