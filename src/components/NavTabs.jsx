import React from 'react'
import { navIcons } from '../Utils/Data'
import CodeOffIcon from '@mui/icons-material/Code';
import {motion} from 'framer-motion'
import { navVariants } from '../utils/motion';
import SectionWrapper from '../HOC/SectionWrapper';


const NavTabs = () => {
  return (
    <section>
   <motion.div variants={navVariants} className="sm:px-16 px-2">      
     <div className="relative p-3">
        <h1 className='font-bold xm:text-2xl dark:text-[#f0f8ff] nav__border px-6'>Posh<span className="text-[#0000ff] font-extrabold"><CodeOffIcon /></span>Code</h1>
        </div>
           </motion.div>

        <div className="flex justify-center items-center">

        <div className="fixed bottom-0 p-4 max-w-fit rounded-[30px] m-3 bg-[#d2d2d28a] dark:blur-effect-theme z-50">
          {navIcons.map((item, index) => (
            <a href={item.id} key={item.id} className="">
              {item.icon}
            </a>
          ))}
        </div>
     </div>
    </section>
  )
}

export default SectionWrapper(NavTabs) 