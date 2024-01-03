import AboutSection from './Sections/AboutSection'
import Experience from './Sections/Experience'
import HeroSection from './Sections/HeroSection'
import ProjectSection from './Sections/ProjectSection'
import Skills from './Sections/Skills'
import NavTabs from './components/NavTabs'
import SocialIcons from './components/SocialIcons'

const App = () => {
  return (
    <>
    <div className="dark:bg-main-dark-bg bg-light-gray">

    <NavTabs />
    <HeroSection />
    <AboutSection />
    <Skills />
    <Experience />
    <ProjectSection />     
    </div>
    </>
  )
}

export default App