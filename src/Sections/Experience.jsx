import { Styles } from '../Utils/Style'
import { TransingText } from '../components/CircularAnimation/CustomText'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import { experience } from '../Utils/Data';

const Experience = () => {
  return (
    <section className={`${Styles.paddingY} mt-12`} id='journey'>
        <TransingText title='Journey & Experience ' textStyles='flex justify-center items-baseline sm:text-[1.7em] xm:text-[1.6em] text-[1.2em]' />


<VerticalTimeline>
    {experience.map((exp) => (
  <VerticalTimelineElement key={exp.apply}
    className="font-extrabold"
    contentStyle={{ background: '#000086f1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '12px solid rgba(0, 0, 206, 0.945)' }}
    icon={
        <div className='w-full h-full flex justify-center items-center'>
            <img src={exp.language} alt="html" className='object-cover sm:w-12 w-9 sm:h-12 h-9' />
        </div>
    }
    date={
        <h1 className='text-gray-500 font-bold'>{exp.date}</h1>
    }
  >
    <div>
    <h1 className='sm:text-lg text-sm'>{exp.languageName}</h1> 
    <p className='poppins'><span className="sm:text-lg text-sm font-extrabold">{exp.progress}</span> {exp.progressII}</p>
    <p className='poppins'><span className="sm:text-lg text-sm font-extrabold">{exp.implement}</span>  {exp.implementII}</p>
     <p className='poppins'><span className='sm:text-lg text-sm font-extrabold'> {exp.learn}</span> {exp.learnII}</p>

   <p className="poppins"><span className="sm:text-lg text-sm font-bold">{exp.apply}</span> {exp.applyII}</p>

   <p className="poppins"><span className="sm:text-lg text-sm font-bold">{exp.project}</span> {exp.projectII}</p>

   <div className="flex justify-between items-center sm:text-lg xm:text-sm text-[11px]">

   <a href="https://poshcarcommerce.netlify.app/" target='_blank'>
   <button className={`text-blue-900 rounded-lg ${exp.background}`}>{exp.button}</button>
   </a>
   <a href="https://www.pinterest.com/pin/1105211564780888461/" target='_blank'>
   <button className={`text-blue-900 rounded-lg ${exp.background}`}>{exp.buttonII} </button>
   </a>
   </div>
     </div>
  
  </VerticalTimelineElement>
    ))}
</VerticalTimeline>
    </section>
  )
}

export default Experience