import {motion} from 'framer-motion'
import { Styles } from '../Utils/Style';
import { Link } from 'react-router-dom';
import { fadeIn, slideIn, staggerContainer } from '../Utils/motion';

const Details = ({projectDetails, projectId}) => {

 const selectProject = projectDetails.find(item => projectId)
 
  return (
 <motion.section initial='hidden' whileInView='show'
 viewport={{once: true}} className={`${Styles.paddingX} h-screen`}>
    <div className='flex justify-between'>
    {/* <Link to='/'>
      back
    </Link> */}
    <h1 className='sm:text-3xl xm:text-2xl text-lg font-extrabold mt-3'>{selectProject.header}</h1>

  </div>

    <div className={`${Styles.paddingY} overflow-x-hidden`}>
      <div className="flex md:flex-row flex-col items-center justify-between sm:gap-10 gap-5">
        <div>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
       <img src={selectProject.projectIMG} alt='image' className={`w-[700px] h-[500px] object-cover ${selectProject.cardShadow} rounded-2xl`} />
       </motion.div>
       </div>

       <motion.div variants={slideIn('right', 'tween', 0.5, 1.2)} >
       <h1 className='poppins sm:text-3xl xm:text-2xl text-lg font-extrabold mt-3'>{selectProject.header}</h1>
       <motion.p className='max-w-[600px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae velit magni nesciunt qui. Corporis veniam doloremque dolores ipsum asperiores enim repellendus quasi! Dignissimos explicabo porro quod adipisci itaque assumenda. Assumenda corporis eius distinctio repellendus quis ducimus accusamus dolore minima totam nam sunt facilis, accusantium repellat commodi laudantium! Ut praesentium enim quia dolorum, a cumque dolor saepe, eveniet modi sunt optio?</motion.p>
      </motion.div>
      </div>
    </div>
    </motion.section>
  );
}

export default Details