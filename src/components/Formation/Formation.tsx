/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { courses } from '../../backend/coursesdb';
import { schools } from '../../backend/schoolsdb';
import { Courses } from '../../types/Courses';
import { Schools } from '../../types/Schools';
import CourseCard from '../CourseCard/CourseCard';
import style from './Formation.module.css';
import lupa from '../../icons/lupa-icon.svg';
import InstitutionCard from '../InstitutionCard/InstitutionCard.tsx';

const tagSearchBar = ['All', 'Front-End', 'JavaScript', 'Back-End', 'IA', 'Python', 'Machine Learning'];

function Formation() {
  const [contentCourse, setContentCourse] = useState<Courses[]>(courses);
  const [filterCourse, setFilterCourse] = useState<Courses[]>(courses);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [contentSchool, setContentSchool] = useState<Schools[]>(schools);
  const [exibition, setExibition] = useState(true);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [inputFilter, setInputFilter] = useState('');
  const projetosPorPagina = 6;

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [paginaAtual]);

  const filterData = (tag: string) => {
    const data = contentCourse.filter((c) => c.tags.includes(tag));
    setFilterCourse(data);
    if (tag === 'All') {
      setFilterCourse(courses);
    }
  };

  useEffect(() => {
    filterData(filterTag);
  }, [filterTag]);

  useEffect(() => {
    const data = contentCourse.filter((c) => c.name.toLowerCase().includes(inputFilter.toLowerCase()));
    setFilterCourse(data);
  }, [inputFilter]);

  const handleCourseBtn = () => {
    setContentCourse(courses);
    setFilterCourse(courses);
    setExibition(true);
  };

  const handleInstitutionsBtn = () => {
    setContentSchool(schools);
    setExibition(false);
  };

  const handleTagFilter = (tag: string) => {
    setFilterTag(tag);
    filterData(filterTag);
  };

  const indiceInicial = (paginaAtual - 1) * projetosPorPagina;
  const indiceFinal = indiceInicial + projetosPorPagina;
  const projetosDaPagina = filterCourse.slice(indiceInicial, indiceFinal);
  console.log(projetosDaPagina);
  const totalPaginas = Math.ceil(filterCourse.length / projetosPorPagina);

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
        <title>Formação</title>
      </Helmet>
      <div className={ style.searchBar }>
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar..."
          className={ style.inputSearch }
          value={ inputFilter }
          onChange={ (e) => setInputFilter(e.target.value) }
        />
        <button className={ style.searchBtn }>
          <img src={ lupa } alt="lupa de buscar" />
        </button>
      </div>

      <div className={ style.chooseContentContainer }>
        <button
          onClick={ handleCourseBtn }
        >
          Cursos
        </button>
        <button
          onClick={ handleInstitutionsBtn }
        >
          Instituições
        </button>
      </div>
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
      { exibition
        ? <CourseCard content={ filterCourse } />
        : <InstitutionCard content={ contentSchool } /> }
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

export default Formation;
