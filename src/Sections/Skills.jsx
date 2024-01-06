import AnimatedProgressProvider from '../components/CircularAnimation';
import { TransingText } from '../components/CustomText'

import SectionWrapper from '../HOC/SectionWrapper'
import { Styles } from '../Utils/Style'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import { circularProgressbar } from '../Utils/Data';
import {motion} from 'framer-motion'
import { fadeIn, textVariant, textVariant2 } from '../Utils/motion';
import FrameWorks from '../components/FrameWorks';

const Skills = () => {

  return (
    <section className={`${Styles.paddingY} ${Styles.paddingX}`}>
         <TransingText title='Skills ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl' />

         <motion.p variants={textVariant(0.30)} className="font-semibold text-center sm:text-lg text-base my-2 dark:text-white leading-7"><span className="text-xl font-extrabold">Technical Proficiencies.</span> This succinctly indicates the
          cover of my technical expertise and programming skills. It provides professional and clear introduction to the subsequent list
           of programming languages and frameworks i possess.</motion.p>

           <div className="flex items-baseline">
           <motion.h1 variants={textVariant2} className='font-extrabold sm:text-2xl xm:text-lg text-sm py-2 dark:text-white'>Programming Languages</motion.h1>
           <span className="xs:w-3 w-2 xs:h-3 h-2 rounded-[50%] bg-black mx-2 dark:bg-white" />

           </div>

         <div style={{fontWeight: 700}} className='w-[100%] h-[100%] grid md:grid-cols-8 grid-cols-4 sm:gap-16 gap-5'>
            {circularProgressbar.map((item, index) => (
                <motion.div variants={fadeIn("up", 'tween', index * 0.28, 0.37)} key={item.skillText}>
            <AnimatedProgressProvider 
              valueStart={item.valueStart}
              valueEnd={item.valueEnd}
              duration={2.0}
              easingFunction={easeQuadInOut}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    /* This is important to include, because if you're fully managing the
              animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ pathTransition: "none",
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',

        
    // Text size
    textSize: '20px',

    // Colors
        pathColor: `blue`,
        textColor: '#767676',
        trailColor: '#d6d6d6',
                })}
                  />
                );
              }}
</AnimatedProgressProvider>
<div className="md:leading-[0px] leading-3 flex flex-col justify-center text-center">
<h1 className='dark:text-white sm:text-base xm:text-[10px] text-[8px] flex justify-center text-center'>{item.skillText}</h1>
<div className="flex justify-center items-center">
<div className="sm:w-2 w-1 sm:h-2 h-1 rounded-[50%] bg-gray-600 dark:bg-gray-400" />
    <p className='text-slate-500 dark:text-slate-300 sm:text-xs text-[8px]'>{item.skillLevel}</p>
    </div>
    </div>
</motion.div>
            ))}

</div>

     <div className="flex items-baseline">
         <motion.h1 variants={textVariant2} className='font-extrabold sm:text-2xl xm:text-lg text-sm py-2 dark:text-white'>Other Frameworks\Tools</motion.h1>
           <span className="xs:w-3 w-2 xs:h-3 h-2 rounded-[50%] bg-black mx-2 dark:bg-white" />
      </div>

    <FrameWorks />
    </section>
  )
}

export default  SectionWrapper(Skills)


