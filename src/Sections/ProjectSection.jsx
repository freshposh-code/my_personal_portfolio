import {motion} from 'framer-motion'
import { Styles } from '../Utils/Style'
import SectionWrapper from '../HOC/SectionWrapper'
import { TypingText } from '../components/CustomText'
import { poshnike } from '../assets'
import { fadeIn } from '../utils/motion'

const ProjectSection = () => {
  return (
    <section className={`${Styles.paddingY} ${Styles.paddingX}`}>
         <TypingText title='My Projects ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl' />

         <motion.p variants={fadeIn('up', 'tween', 0.30, 0.35)} className='font-bold text-center sm:text-lg text-base py-5 leading-7 dark:text-white'>
            Discover a curated selection of my impactful projects showcasing a fusion of creativity.
          Step into my world of projects, innovation, and proficiency across diverse technological landscapes,   
          Witness the transformation of complex challenges into elegant solutions.
          Discover a versatile toolkit of frameworks and tools wielded to enhance functionalities,
         Immerse yourself in projects meticulously designed for exceptional user experiences.</motion.p>

         <div className='flex flex-wrap mt-5'>

         <div className='border'>
            <div>
            <img src={poshnike} alt="alt" className='w-[380px] h-[360px] object-center object-cover' />
            </div>
            <div>
                <h1 className='dark:text-white'>Nike-Store</h1>
            </div>
         </div>

         </div>
    </section>
  )
}

export default SectionWrapper(ProjectSection)