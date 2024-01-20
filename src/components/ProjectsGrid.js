import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

const ProjectsGrid = ({ projects }) => (
  <div className="projects-grid">
    {projects.map((project, index) => (
      <div className="project" key={index}>
        <Link to={`/projects/${index}`}>
          <Project {...project} />
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectsGrid;
