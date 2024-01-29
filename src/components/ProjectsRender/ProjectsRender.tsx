import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { projects } from '../../backend/projectsdb';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './ProjectsRender.module.css';

function ProjectsRender() {
  const [projectContent, setProjectContent] = useState(projects);
  return (
    <div className={ style.container }>
      <Helmet>
        <title>
          Projetos
        </title>
      </Helmet>
      <ProjectCard content={ projectContent } />
    </div>
  );
}

export default ProjectsRender;
