import {motion} from 'framer-motion'
import { Styles } from '../Utils/Style'
import { TransingText } from '../components/CircularAnimation/CustomText'
import { fadeIn, textVariant, zoomIn } from '../Utils/motion'
import { projectII } from '../Utils/Data'
import { Link } from 'react-router-dom'
import { Visibility } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MoreProject = () => {
  return (
    <motion.section className={`${Styles.paddingY} ${Styles.paddingX}`} id='project'>
         <TransingText title='Additional Projects ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl sm:py-0 py-3 mt-3' />

         <motion.p variants={textVariant(0.55)} className='font-semibold text-center sm:text-lg text-base py-5 leading-7 dark:text-white'>
         Welcome to my Projects Portfolio. Here, I invite you to explore a range and extented selection of my innovative and diverse projects,
          each a testament to my creative problem-solving abilities across various technological domains,
          that further underscore my versatility. Each project demonstrates my commitment to innovation and problem-solving.</motion.p>

         <div className='flex flex-wrap sm:gap-5 gap-5 mt-5 sm:justify-normal justify-center'>
            {projectII.map((item, index) => (
         <motion.div initial='hidden' whileInView='show'
         viewport={{once: true, amount: 0.25}} variants={fadeIn('up', 'tween', index * 0.15, 0.45)} className={`${item.cardShadow} sm:p-[12px] xm:p-[11px] p-[9px] rounded-xl relative`} key={item.id}>

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
                    <motion.div variants={zoomIn(index * 0.45, 0.75)} key={tool.alt}>
                    <img src={tool.languages} alt={tool.alt} className='sm:w-7 xm:w-5 w-4 sm:h-7 xm:h-5 h-4 object-cover' />
                    </motion.div>
                    ))}
                    </div>
             </div>

             <div className='font-semibold flex justify-between items-center'>
                <a href={item.siteLink} target='_blank'>
                <button className='bg-black text-white dark:bg-white dark:text-black p-[6px] rounded-md text-sm'>{item.live} <Visibility style={{fontSize: '18px'}} /></button>
                </a>

                <Link to={`/detailsII/${item.head}`}>
                <button className='bg-black text-white dark:bg-white dark:text-black p-[6px] rounded-md text-sm'>{item.details}<ArrowForwardIcon style={{fontSize: '18px'}} /></button>
                </Link>
             </div>

              <div>

            </div>
         </motion.div>
            ))}        
         </div>
         <div className="mt-10 dark:text-white">
          <h1 className="sm:text-6xl text-3xl font-extrabold py-2">Let's Connect!</h1>
          <h2 className='font-semibold sm:text-2xl text-lg'>let work on your project.</h2>
          <p className='font-semibold mt-2'>You can reach out to me on <span>
            <a href="https://wa.me/+2349068620646?text=Hi%20there" target='-blank' className='font-black sm:text-xl text-lg text-green-700'>WHATSAPP</a></span> OR <span>
              <a href="https://twitter.com/farouk_ayo" target='-blank' className='font-black sm:text-xl text-lg text-blue-700'>TWITTER</a></span> which you prefer.</p>
         </div>

    </motion.section>
  )
}

export default MoreProject