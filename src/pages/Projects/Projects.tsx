import { useEffect } from 'react';
import ProjectsRender from '../../components/ProjectsRender/ProjectsRender';
import style from './Projects.module.css';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className={ style.title }>Projetos</h1>
      <ProjectsRender />
    </div>
  );
}

export default Projects;
