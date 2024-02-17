import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TopProjects.module.css';
import { projects } from '../../backend/projectsdb';
import { Projects } from '../../types/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import arrow from '../../icons/arrow-right.svg';

function TopProjects() {
  const [topProject, setTopProject] = useState<Projects[]>(projects);

  useEffect(() => {
    const data = topProject.filter((p) => p.highlighted === true);
    setTopProject(data);
  }, [projects]);

  return (
    <div>
      <div className={ style.topContainer }>
        <h2 className={ style.title }>Projetos</h2>
        <span className={ style.subtitle }>Aqui estão meus principais projetos</span>
      </div>
      <div className={ style.cardContainer }>
        <ProjectCard content={ topProject } />
      </div>
      <div className={ style.bottomContainer }>
        <Link to="/projects" className={ style.linkBtn }>
          <button
            className={ style.allBtn }
          >
            <span>Todos os projetos</span>
            <img src={ arrow } alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TopProjects;
