import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
    {
      title: 'Online Art gallery',
      description: 'A web-based online art gallery database using ReactJS and mongoDB for user authentication and data management.',
      link: 'https://assign6-pvmw.vercel.app/',
    },
    {
      title: 'Ticket Manager App',
      description: 'A ticket management app that uses python and django databse for user authentication and data management.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Positive messaging board app',
      description: 'a simple web page that utilizes python and flask to give users an opportunity to post inspirational messages and share them with their friends.',
      link: 'https://example.com/project3',
    },
    // Add more projects as needed
  ];

const ProjectDetails = () => {
    const { projectId } = useParams(); // Fetch the projectId from the route parameters
    const projectIndex = parseInt(projectId, 10);
     const project = projects[projectIndex]; // Fetch the corresponding project details
  
    // Check if the project exists
    if (!project) {
      return <div>Project not found</div>;
    }
  
    const { title, description, link } = project;
  
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    );
  };
  

export default ProjectDetails;
