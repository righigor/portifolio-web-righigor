import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { projects } from '../../backend/projectsdb';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './ProjectsRender.module.css';
import { Projects } from '../../types/Projects';

// eslint-disable-next-line max-len
const tagSearchBar = ['All', 'Front-End', 'JavaScript', 'Back-End', 'Python'];

function ProjectsRender() {
  const [projectContent, setProjectContent] = useState(projects);
  const [filterProject, setFilterProject] = useState<Projects[]>(projects);
  const [filterTag, setFilterTag] = useState<string>('All');

  const filterData = (tag: string) => {
    const data = projectContent.filter((c) => c.tags.includes(tag));
    setFilterProject(data);
    if (tag === 'All') {
      setFilterProject(projects);
    }
  };

  const handleTagFilter = (tag: string) => {
    setFilterTag(tag);
    filterData(filterTag);
  };
  return (
    <div className={ style.container }>
      <Helmet>
        <title>
          Projetos
        </title>
      </Helmet>
      <div className={ style.filterContainer }>
        {tagSearchBar.map((tag, i) => (
          <button
            key={ i }
            onClick={ () => handleTagFilter(tag) }
          >
            { tag }
          </button>
        ))}
      </div>
      <ProjectCard content={ projectContent } />
    </div>
  );
}

export default ProjectsRender;
