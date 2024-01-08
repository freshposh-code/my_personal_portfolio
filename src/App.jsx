import * as React from "react";

import NavTabs from './components/NavTabs'
import { AboutSection, Contact, Experience, HeroSection, PoshSection, ProjectSection, Skills } from "./Sections";
import { MoreProject, ProjectDetails, ProjectDetailsII } from './Pages'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { project } from "./Utils/Data";
import Footer from "./components/Footer";

const App = () => {
  const router = createBrowserRouter([  
      {
        path: "/",
        element: (
          <div className="dark:bg-main-dark-bg bg-light-gray">

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
        ),
      },
      ...project.map((item) => {
        const { projectDetails, ...selectedProject } = item;
     return {
          path: `/details/${selectedProject.head}`,
          element: <div className="dark:bg-main-dark-bg bg-light-gray"><ProjectDetails projectId={item.id} project={selectedProject}
           projectDetails={selectedProject.projectDeatils} /></div>
        }
      }),

      {
        path: "projects",
        element: <div className="dark:bg-main-dark-bg bg-light-gray"><MoreProject /></div>
      },

      {
        path: `detailsII`,
        element: <div className="dark:bg-main-dark-bg bg-light-gray"><ProjectDetailsII /></div>
      },
    ]);


    return (
      <RouterProvider router={router} />
    )


}

export default App

