import React from 'react';

const Project = ({ title, description, link }) => (
  <div className='project-wrapper'>
    <div className="project">
      <img 
        src={"https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=1060&t=st=1706058708~exp=1706059308~hmac=7d7955ac26fae81888f66e3ce69663a20c22f15d200def0feb5d520e3eeb70b2"} 
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
