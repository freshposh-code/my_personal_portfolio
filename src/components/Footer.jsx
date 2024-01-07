import CodeOffIcon from '@mui/icons-material/Code';
import { Styles } from '../Utils/Style'
import {motion} from 'framer-motion'
import SectionWrapper from '../HOC/SectionWrapper'
import { fadeIn } from '../Utils/motion'
import { socialIcons } from '../Utils/Data';
import { TransingText } from './CircularAnimation/CustomText';

const Footer = () => {
  return (
    <section className={`${Styles.paddingY} ${Styles.paddingX}`}>

      <div className="flex justify-between items-center sm:flex-row flex-col">
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="sm:px-16 px-2">      
     <div className="relative p-3">
        <h1 className='font-bold xm:text-2xl dark:text-[#f0f8ff] nav__border px-6'>Posh<span className="text-[#0000ff] font-extrabold"><CodeOffIcon /></span>Code</h1>
        </div>
           </motion.div>

        <div className="flex sm:flex-row flex-col items-center">
           <div className="flex">
            {socialIcons.map((item, index) => (
              <a href={item.link}>
              <span>{item.icon}</span>
              </a>
            ))}
           </div>

          <div>
          <TransingText title='Crafted by Pøsh-cødę' textStyles='font-bold' />
           </div>

         </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Footer)