import React, { useState } from 'react'
import { navIcons } from '../Utils/Data'
import CodeOffIcon from '@mui/icons-material/Code';
import {motion} from 'framer-motion'
import { fadeIn, navVariants, } from '../Utils/motion';
import { UseThemeContext } from '../ContextProvider/ThemeContext';
import { Brightness1, Brightness4, DarkMode } from '@mui/icons-material';

const NavTabs = () => {
  const [navActive, setNavActive] = useState('#')
  const {currentMode, setMode} = UseThemeContext()

  // Function to toggle between Light and Dark modes
  const toggleTheme = () => {
    const newMode = currentMode === 'Dark' ? 'Light' : 'Dark';
    setMode({ target: { value: newMode } });
  };

  return (
    <motion.section initial='hidden' whileInView='show'
    viewport={{once: false, amount: 0.25}} id='home'>
   <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="sm:px-16 px-2">      
     <div className="relative p-3">
        <h1 className='font-bold xm:text-2xl dark:text-[#f0f8ff] nav__border px-6'>Posh<span className="text-[#0000ff] font-extrabold"><CodeOffIcon /></span>Code</h1>
        </div>
           </motion.div>

        <div className="flex justify-center items-center">

        <motion.div variants={navVariants} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.25}} className="fixed bottom-0 p-4 max-w-fit rounded-[30px] m-2 bg-[#d2d2d25d] z-50">
          {navIcons.map((item) => (
            <a href={item.id} key={item.id} onClick={() => setNavActive(`${item.id}`)}>
              <span  className={`${navActive === `${item.id}`  ? 'scale text-white' : ''} sm:p-[7px] p-[5px] text-center`}>{item.icon}</span>
            </a>
          ))}
             <div className="absolute top-0 flex justify-center items-center right-0 left-0 -m-2">
        <button onClick={toggleTheme}>
         {currentMode === 'Dark' ? <Brightness4 className='text-white' /> : <DarkMode className='text-gray-800'/>}
        </button>
      </div>
        </motion.div>
     </div>
  
    </motion.section>
  )
}

export default NavTabs 