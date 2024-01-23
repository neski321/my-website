import React from 'react';

const Project = ({ title, description, link }) => (
  <div className='project-wrapper'>
    <div className="project">
      <img 
      src={"https://theprogressiveaspect.net/wp-content/uploads/2023/05/Random-Earth-Project-Airwaves.jpg"} 
      alt={title} 
      height={150}
      width={150}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
      </a>
    </div>
  </div>
);


export default Project;
