import { motion } from "framer-motion";
import { socialIcons } from '../Utils/Data';
import SectionWrapper from '../HOC/SectionWrapper';
import { zoomIn } from "../Utils/motion";

const SocialIcons = () => {
  return (
    <section>
      <div className='flex gap-3'>
        {socialIcons.map((socials, index) => {
           return <motion.div variants={zoomIn(index * 0.36, 0.53)} className='m-[5px]'>
           <a href={socials.link} target='_blank'>
             <span>{socials.icon}</span>
          </a>
          </motion.div>
        })}
      </div>
    </section>
  )
}

export default SectionWrapper(SocialIcons)