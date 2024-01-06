import {motion} from 'framer-motion'
import { Styles } from '../Utils/Style'
import { TypingText } from '../components/CustomText'
import { fadeIn, zoomIn } from '../Utils/motion'
import { project } from '../Utils/Data'
import { Link } from 'react-router-dom'
import { Visibility } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectSection = () => {
  return (
    <section className={`${Styles.paddingY} ${Styles.paddingX}`}>
         <TypingText title='My Projects ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl' />

         <p className='font-semibold text-center sm:text-lg text-base py-5 leading-7 dark:text-white'>
            Discover a curated selection of my impactful projects showcasing a fusion of creativity.
          Step into my world of projects, innovation, and proficiency across diverse technological landscapes,   
          Witness the transformation of complex challenges into elegant solutions.
          Discover a versatile toolkit of frameworks and tools wielded to enhance functionalities,
         Immerse yourself in projects and provided source code.</p>

         <div className='flex flex-wrap gap-5 mt-5 justify-center'>
            {project.map((item, index) => (
         <motion.div initial='hidden' whileInView='show'
         viewport={{once: true, amount: 0.25}}
         variants={fadeIn('up', 'tween', index * 0.5, 0.45)} className={`${item.cardShadow} sm:p-[12px] xm:p-[11px] p-[9px] rounded-xl relative`} key={item.id}>

            <div>
            <img src={item.projectIMG} alt="alt" className='w-[295px] h-[290px] object-center object-cover rounded-lg' />
            </div>
            <div className='black-gradient text-white absolute top-3 m-1 p-[4px] rounded-[50%] flex justify-center items-center'>
                <a href={item.linkgit} target='_blank'>
                    {item.github}
                </a>
            </div>
            <div className='black-gradient text-white absolute top-3 right-3 m-1 p-[4px] rounded-[50%] flex justify-center items-center'>
                <a href={item.linkvisible} target='_blank'>
                    {item.visibility}
                </a>
            </div>
            <div>
                <h1 className='dark:text-white font-extrabold sm:text-xl text-lg'>{item.head}</h1>
                <p className="font-semibold dark:text-white py-2 sm:text-base xm:text-base text-sm">{item.tech}</p>
                <div className="flex gap-7 py-2">
                    {item.tools.map((tool, index) => (
                    <motion.div variants={zoomIn(index * 0.55, 0.88)} key={tool.alt}>
                    <img src={tool.languages} alt={tool.alt} className='sm:w-7 xm:w-5 w-4 sm:h-7 xm:h-5 h-4 object-cover' />
                    </motion.div>
                    ))}
                    </div>
             </div>

             <div className='font-semibold flex justify-between items-center'>
                <a href={item.siteLink} target='_blank'>
                <button className='bg-black text-white dark:bg-white dark:text-black p-[6px] rounded-md text-sm'>{item.live} <Visibility style={{fontSize: '18px'}} /></button>
                </a>

                <Link to={`/details/${item.head}`}>
                <button className='bg-black text-white dark:bg-white dark:text-black p-[6px] rounded-md text-sm'>{item.details}<ArrowForwardIcon style={{fontSize: '18px'}} /></button>
                </Link>
             </div>

              <div>

            </div>
         </motion.div>
            ))}        
         </div>
        <div className="flex justify-center items-center">
            <Link to='/projects'>
          <motion.button variants={fadeIn('up', 'tween', 0.60, 0.67)}
           className='bg-black dark:bg-white p-3 text-white dark:text-black mt-8 rounded-[33px] font-semibold'>More Project<ArrowForwardIcon style={{fontSize: '18px'}} /></motion.button>
            </Link>
          </div>
    </section>
  )
}

export default ProjectSection