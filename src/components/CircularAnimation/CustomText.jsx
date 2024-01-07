
import { motion } from "framer-motion";
import { fadeIn, textContainer, textVariant2 } from "../../Utils/motion";

export const TransingText = ({ title, textStyles }) => {
 return (
  <>
   <motion.p
    variants={textContainer}
    className={`font-bold dark:text-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00a0" : letter}
      </motion.span>
    ))}
    <motion.span variants={fadeIn('up', 'tween', 0.70, 0.57)} className='bg-black w-3 h-3 rounded-[50%] dark:bg-white' />
  </motion.p>
    </>
 )
    };