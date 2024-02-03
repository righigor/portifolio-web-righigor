import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { projects } from '../../backend/projectsdb';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './ProjectsRender.module.css';
import { Projects } from '../../types/Projects';

// eslint-disable-next-line max-len
const tagSearchBar = ['All', 'Front-End', 'JavaScript', 'CSS', 'Back-End', 'Python'];

function ProjectsRender() {
  const [projectContent, setProjectContent] = useState(projects);
  const [filterProject, setFilterProject] = useState<Projects[]>(projects);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const projetosPorPagina = 6;

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [paginaAtual]);

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

  const indiceInicial = (paginaAtual - 1) * projetosPorPagina;
  const indiceFinal = indiceInicial + projetosPorPagina;
  const projetosDaPagina = filterProject.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(filterProject.length / projetosPorPagina);

  const nextPage = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const prevPage = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
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
      <ProjectCard content={ projetosDaPagina } />
      <div className={ style.pagContainer }>
        <button onClick={ prevPage } disabled={ paginaAtual === 1 }>
          Anterior
        </button>
        <span>
          {paginaAtual}
          {' '}
          de
          {' '}
          {totalPaginas}
        </span>
        <button onClick={ nextPage } disabled={ paginaAtual === totalPaginas }>
          Próxima
        </button>
      </div>
    </div>
  );
}

export default ProjectsRender;
