import React from 'react';
import ReactPlayer from 'react-player';
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
      description: 'A Ticket management app that uses python and django database for user authentication and data management.',
      link: 'https://github.com/neski321/MyTicketApp',
      screenshots: [
        "/static/Ticketmanager/Ticketmanager1.png",
        "/static/Ticketmanager/Ticketmanager3.png",
        "/static/Ticketmanager/Ticketmanager4.png",
        "/static/Ticketmanager/Ticketmanager6.png",        
        "/static/Ticketmanager/Ticketmanager7.png",
        "/static/Ticketmanager/ticketmanager21.png",
        "/static/Ticketmanager/ticketmanager27.png",
      ],
    },
    {
      title: 'Spreading Positivity Social app',
      description: 'The Spreading Positivity Social App is a web application I designed to foster a supportive online community by allowing users to share uplifting messages and engage with positive content. Built on the Flask web framework and integrated with Firebase services, the platform provides user authentication, real-time updates, and a dynamic messaging system.',
      link: 'https://github.com/neski321/Messages_board',
      screenshots: [
        "/static/MessagesBoard/social_app1.png",
        "/static/MessagesBoard/social_app2.png",
        "/static/MessagesBoard/social_app3.png",
      ],
    },
    {
      title: 'Avoiding game',
      description: 'The game, titled "Avoid the Enemies," involves a player-controlled block that must dodge falling enemy blocks to accumulate a high score. The player moves the block horizontally to avoid collisions with descending enemy blocks. The game features dynamic difficulty, as the speed of the falling enemy blocks gradually increases with the players score. The entire game is written in Python using Pygame library.',
      link: 'https://github.com/neski321/AvoidingGame',
      screenshots: [
        "/static/Avoidinggame/Avoidgame1.png",
        "/static/Avoidinggame/Avoidgame2.png",
        "/static/Avoidinggame/Avoidgame3.png",
      ],
      VideoDemo: 'https://vimeo.com/910294731?share=copy'
    },
    {
      title: 'This Webapp',
      description: 'My personal website built using ReactJS. It features a collection of projects, a resume, and an about me section. The design incorporates a clean and responsive layout with tabs for easy navigation. The aesthetic combines a mix of vibrant colors, gradients, and carefully crafted styling for a visually appealing and user-friendly experience.',
      link: 'https://github.com/neski321/my-website',
      screenshots: [],
    }
    // Add more projects as needed
  ];

const ProjectDetails = () => {
    const { projectId } = useParams(); // Fetch the projectId from the route parameters
    const projectIndex = parseInt(projectId, 10);
    const project = projects[projectIndex]; // Fetch the corresponding project details
  
    // Check if the project exists
    if (!project) {
      return <div style={{marginTop: '20px'}}>Project not found</div>;
    }
  
    const { title, description, screenshots, link, VideoDemo } = project;
  
    const renderScreenshots = () => {
      if (screenshots.length === 0) {
        return <>
        <h3>Screenshots</h3>
        <p style={{fontSize: '24px'}}>No screenshots available for this project.</p>
        </>
      }

      return (
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
      );
    };

    const renderVideoDemo = () => {
      if (VideoDemo) {
        return (
          <div>
            <h3>Video Demo</h3>
            <ReactPlayer url={VideoDemo} controls width="100%" />
          </div>
        );
      }
      return null;
    };

    return (
      <div className="project-details">
        <h2>{title}</h2>
        <p style={{fontSize: '24px'}}>{description}</p>
  
          {renderScreenshots()}
          {renderVideoDemo()}
  
        <div>
          <h3>Project Link(s)</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectDetails;
