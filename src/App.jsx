import * as React from "react";

import NavTabs from './components/NavTabs'
import { AboutSection, Contact, Experience, HeroSection, PoshSection, ProjectSection, Skills } from "./Sections";
import { MoreProject, ProjectDetails, ProjectDetailsII } from './Pages'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { project, projectII } from "./Utils/Data";
import Footer from "./components/Footer";
import { UseThemeContext } from "./ContextProvider/ThemeContext";

const App = () => {

  const {currentMode} = UseThemeContext();

  const router = createBrowserRouter([  
      {
        path: "/",
        element: (
          <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="dark:bg-black bg-light-gray">
              
          <NavTabs />
          
         <HeroSection />
         <AboutSection />
         <Skills />
         <Experience />
         <ProjectSection />  
          <PoshSection />
          <Contact />

          <Footer />
       
         </div>  
          </div>
        ),
      },
      ...project.map((item) => {
        const { projectDetails, ...selectedProject } = item;
     return {
          path: `/details/${selectedProject.head}`,
          element: <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
            <div className="dark:bg-main-dark-bg bg-light-gray"> <ProjectDetails projectId={item.id} project={selectedProject}
           projectDetails={selectedProject.projectDeatils} /></div>
           </div>
        }
      }),

      {
        path: "/projects",
        element: <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
          <div className="dark:bg-main-dark-bg bg-light-gray"><MoreProject /></div>
        </div>
      },
      
      ...projectII.map((item) => {
        const { projectDetails, ...selectedProject } = item;
        return  {
          path: `/detailsII/${selectedProject.head}`,
          element:  <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
            <div className="dark:bg-main-dark-bg bg-light-gray"> <ProjectDetailsII projectId={selectedProject}
           projectDetails={selectedProject.projectDeatils} /></div>
          </div>
        }
      }),

    ]);


    return (
      <RouterProvider router={router} />
    )


}

export default App

