import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Fetch additional project details based on projectId
  // Replace this with your actual logic to fetch and display project details

  const projectDetails = {
    title: `Project ${projectId}`,
    description: `This is a detailed description for Project ${projectId}.`,
    // Add more details as needed
  };

  return (
    <div>
      <h2>{projectDetails.title}</h2>
      <p>{projectDetails.description}</p>
      {/* Render additional project details here */}
    </div>
  );
};

export default ProjectDetails;
