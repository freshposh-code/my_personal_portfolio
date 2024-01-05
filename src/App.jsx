import * as React from "react";

import AboutSection from './Sections/AboutSection'
import Experience from './Sections/Experience'
import HeroSection from './Sections/HeroSection'
import ProjectSection from './Sections/ProjectSection'
import Skills from './Sections/Skills'
import NavTabs from './components/NavTabs'
import { MoreProject, ProjectDetails } from './Pages'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { project } from "./Utils/Data";

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
    ]);

    

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

}

export default App

