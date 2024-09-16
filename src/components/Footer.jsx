import CodeOffIcon from '@mui/icons-material/Code';
import { Styles } from '../Utils/Style'
import { motion } from 'framer-motion'
import SectionWrapper from '../HOC/SectionWrapper'
import { fadeIn } from '../Utils/motion'
import { footerlang } from '../Utils/Data';
import { TransingText } from './CircularAnimation/CustomText';

const Footer = () => {
  return (
    <section className={`${Styles.paddingY} ${Styles.paddingX}`}>
      <div className="flex items-center flex-wrap sm:justify-between justify-center sm:gap-0 gap-5">

        <motion.div variants={fadeIn('up', 'tween', 0.22, 0.80)} className="">
          <div className="relative p-3">
            <h1 className='font-bold xm:text-2xl dark:text-[#f0f8ff] nav__border px-6'>Posh<span className="text-[#0000ff] font-extrabold"><CodeOffIcon /></span>Code</h1>
          </div>
        </motion.div>

        <div className="flex items-center font-semibold gap-2 dark:text-white sm:text-base text-sm">
          <h1 className='sm:text-lg text-base'>Made with</h1>
          {footerlang.map((item) => (
            <div key={item.langauage}>
              <img src={item.langauage} alt={item.langauage} className='sm:w-5 w-4 sm:h-5 h-4 object-cover' />
            </div>

          ))}
          <span className='sm:text-xl text-base'>& ❤️</span>
        </div>

        <div>
          <TransingText title='Crafted by Pøsh<>cødę' textStyles='font-bold sm:text-2xl xm:text-xl text-lg capitalize' me='me' />
        </div>

      </div>
      <motion.h1 variants={fadeIn('down', 'tween', 0.2, 0.80)}
        className='font-extrabold dark:text-white sm:text-lg xm:text-base text-xs text-center'>
        <span className="text-xl">&copy;</span> 2023-2024 All right reserve.<span className='text-[#2563eb]'>Pøsh-cødę</span></motion.h1>
    </section>
  )
}

export default SectionWrapper(Footer)