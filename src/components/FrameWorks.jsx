import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from './CircularAnimation';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';
import SectionWrapper from '../HOC/SectionWrapper'
import { circularProgressbarII } from '../Utils/Data';

const FrameWorks = () => {
  return (
  
    <div style={{fontWeight: 700}} className='w-[100%] h-[100%] grid md:grid-cols-8 grid-cols-4 sm:gap-16 gap-5'>
    {circularProgressbarII.map((item, index) => (
        <motion.div variants={fadeIn("up", 'tween', index * 0.29, 0.38)} key={item.skillText}>
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

  )
}

export default SectionWrapper(FrameWorks)