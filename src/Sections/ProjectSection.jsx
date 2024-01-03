import React from 'react'
import { Styles } from '../Utils/Style'
import SectionWrapper from '../HOC/SectionWrapper'
import { TypingText } from '../components/CustomText'

const ProjectSection = () => {
  return (
    <section className={`${Styles.paddingY}`}>
         <TypingText title='My Projects ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl' />
    </section>
  )
}

export default SectionWrapper(ProjectSection)