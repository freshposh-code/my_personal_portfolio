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
    <h1 className='poppins text-2xl font-extrabold'>{selectProject.header}</h1>

  </div>

    <motion.div className={`${Styles.paddingY} mx-auto relative z-0`}>
      <div className="flex md:flex-row flex-col items-center justify-between">
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
       <img src={selectProject.projectIMG} alt='image' className='w-[700px] h-[500px] object-cover' />
       </motion.div>
       <motion.p variants={slideIn('right', 'tween', 0.2, 1)} className='max-w-[600px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae velit magni nesciunt qui. Corporis veniam doloremque dolores ipsum asperiores enim repellendus quasi! Dignissimos explicabo porro quod adipisci itaque assumenda. Assumenda corporis eius distinctio repellendus quis ducimus accusamus dolore minima totam nam sunt facilis, accusantium repellat commodi laudantium! Ut praesentium enim quia dolorum, a cumque dolor saepe, eveniet modi sunt optio?</motion.p>
      </div>
    </motion.div>
    </motion.section>
  );
}

export default Details