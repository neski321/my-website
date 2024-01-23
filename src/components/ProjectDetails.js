import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
    {
      title: 'Online Art gallery',
      description: 'A web-based online art gallery database using ReactJS and mongoDB for user authentication and data management.',
      link: 'https://assign6-pvmw.vercel.app/',
      screenshots: [
        "/static/OnlineArt/OnlineArt1.png",
        "/static/OnlineArt/OnlineArt2.png",
        "/static/OnlineArt/OnlineArt3.png",
        "/static/OnlineArt/OnlineArt4.png",
        "/static/OnlineArt/OnlineArt5.png",
        "/static/OnlineArt/OnlineArt6.png",        
      ],
    },
    {
      title: 'Ticket Manager App',
      description: 'A ticket management app that uses python and django databse for user authentication and data management.',
      link: 'https://example.com/project2',
      screenshots: [
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      ],
    },
    {
      title: 'Positive messaging board app',
      description: 'a simple web page that utilizes python and flask to give users an opportunity to post inspirational messages and share them with their friends.',
      link: 'https://example.com/project3',
      screenshots: [
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      ],
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
  
    const { title, description, screenshots, link } = project;
  
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
  
        <div>
          <h3>Screenshots</h3>
          <div className='screenshots-container'>
          {screenshots.map((screenshot, index) => (
            <img 
              key={index} 
              src={screenshot} 
              alt={`Screenshot ${index + 1}`} 
              className="screenshot"
            />
          ))}
          </div>
        </div>
  
        <div>
          <h3>Project Link</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectDetails;
