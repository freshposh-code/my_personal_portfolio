import {motion} from 'framer-motion'
import { Styles } from '../Utils/Style';
import PreviewIcon from '@mui/icons-material/Preview';
import { fadeIn, slideIn, zoomIn } from '../Utils/motion';
import { GitHub } from '@mui/icons-material';

const Details = ({projectDetails, projectId}) => {

 const selectProject = projectDetails.find(item => projectId)
 
  return (
 <motion.section initial='hidden' whileInView='show'
 viewport={{once: true}} className={`${Styles.paddingX} h-[100%]`}>
    <div className='flex justify-between'>
    <h1 className={`sm:text-3xl xm:text-2xl text-lg font-extrabold mt-3 rounded-lg px-3 py-1 dark:text-white ${selectProject.cardShadow}`}>{selectProject.header}</h1>

  </div>

    <div className={`${Styles.paddingY} overflow-x-hidden sm:mt-0 mt-5`}>
      <div className="flex md:flex-row flex-col items-center justify-between sm:gap-10 gap-5">
        <div>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
       <img src={selectProject.projectIMG} alt='image' className={`w-[700px] h-[500px] object-cover ${selectProject.cardShadow} rounded-2xl`} />
       </motion.div>
       </div>

       <motion.div className='dark:text-white' variants={slideIn('right', 'tween', 0.5, 1.2)}>

        <div className="flex items-center gap-8">
       <motion.h1 variants={fadeIn('up', 'tween', 0.35, 1)} className='sm:text-3xl xm:text-2xl text-lg font-extrabold my-3 dark:text-white'>{selectProject.header}</motion.h1>
       
        <motion.a variants={zoomIn(1.3)} href={selectProject.preview} target='_blank' className={`${selectProject.cardShadow} rounded-md`}>
        <PreviewIcon style={{fontSize: '27px'}} />
       </motion.a>

        <motion.a variants={zoomIn(1.3)} href={selectProject.previewGit} target='_blank' className={`${selectProject.cardShadow} rounded-md`}>
        <GitHub style={{fontSize: '27px'}} />
       </motion.a>
      </div>
         
       <h1 className='sm:text-2xl text-xl font-extrabold dark:text-white'>Project Overview:</h1>
       <p className='max-w-[780px] font-semibold dark:text-white poppins sm:text-[17px] text-base sm:leading-9 leading-8'>
        {selectProject.projectDetail}
       </p>

       <h1 className='sm:text-[22px] py-2 text-xl font-extrabold dark:text-white'>{selectProject.tech}</h1>
       <p className='max-w-[600px] font-semibold dark:text-white poppins sm:text-[17px] text-base sm:leading-9 leading-8'>{selectProject.techdetails}</p>

       <h1 className='sm:text-[22px] py-2 text-xl font-extrabold dark:text-white'>{selectProject.func}</h1>
       <p className='max-w-[600px] font-semibold dark:text-white poppins sm:text-[17px] text-base sm:leading-9 leading-8'>{selectProject.funcdetails}</p>

       <h1 className='sm:text-[22px] py-2 text-xl font-extrabold dark:text-white'>{selectProject.userInter}</h1>
       <p className='max-w-[600px] font-semibold dark:text-white poppins sm:text-[17px] text-base sm:leading-9 leading-8'>{selectProject.userInterdetails}</p>

       <p className='text-xs text-[#8e8e8e] font-black dark:text-white'>{selectProject.languages}</p>
      </motion.div>
      </div>
    </div>
    </motion.section>
  );
}

export default Details
