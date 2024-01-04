import React from 'react'

const Details = ({project, projectDetails, projectId}) => {
  
 const selectedProject = projectDetails.find(item => projectId)
 
  return (
    <div className="">
      <h2>{selectedProject.header}</h2>
    </div>
  );
}

export default Details