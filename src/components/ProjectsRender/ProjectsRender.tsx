import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { projects } from '../../backend/projectsdb';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './ProjectsRender.module.css';
import { Projects } from '../../types/Projects';
import { usePageContext } from '../../provider/pageProvider';

// eslint-disable-next-line max-len
const tagSearchBar = ['All', 'Front-End', 'JavaScript', 'CSS', 'Back-End', 'Python', 'ReactNative'];

function ProjectsRender() {
  const [projectContent] = useState<Projects[]>(projects);
  const [filterProject, setFilterProject] = useState<Projects[]>(projects);
  const [filterTag, setFilterTag] = useState<string>('All');
  const itensPerPage = 6;
  const { paginaAtualProjects, setPaginaAtualProjects } = usePageContext();

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [paginaAtualProjects]);

  useEffect(() => {
    filterData(filterTag);
  }, [filterTag]);

  const indiceInicial = (paginaAtualProjects - 1) * itensPerPage;
  const indiceFinal = indiceInicial + itensPerPage;
  const projectsByPage = filterProject.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(filterProject.length / itensPerPage);

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
    setPaginaAtualProjects(1);
  };

  const nextPage = () => {
    if (paginaAtualProjects < totalPaginas) {
      setPaginaAtualProjects(paginaAtualProjects + 1);
    }
  };

  const prevPage = () => {
    if (paginaAtualProjects > 1) {
      setPaginaAtualProjects(paginaAtualProjects - 1);
    }
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
      <ProjectCard content={ projectsByPage } />
      <div className={ style.pagContainer }>
        <button onClick={ prevPage } disabled={ paginaAtualProjects === 1 }>
          Anterior
        </button>
        <span>
          {paginaAtualProjects}
          {' '}
          de
          {' '}
          {totalPaginas}
        </span>
        <button
          onClick={ nextPage }
          disabled={ paginaAtualProjects === totalPaginas || totalPaginas === 0 }
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default ProjectsRender;
