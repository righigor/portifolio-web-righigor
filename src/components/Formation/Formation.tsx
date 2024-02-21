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
import { usePageContext } from '../../provider/pageProvider.tsx';

const tagSearchBar = ['All', 'Front-End', 'JavaScript', 'Back-End', 'IA', 'Python', 'Machine Learning'];

function Formation() {
  const [contentCourse, setContentCourse] = useState<Courses[]>(courses);
  const [filterCourse, setFilterCourse] = useState<Courses[]>(courses);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [contentSchool, setContentSchool] = useState<Schools[]>(schools);
  const [inputFilter, setInputFilter] = useState('');
  const { paginaAtualCourses, setPaginaAtualCourses, exibition, setExibition } = usePageContext();
  const itensPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [paginaAtualCourses]);

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
    setPaginaAtualCourses(1);
    setExibition(true);
  };

  const handleInstitutionsBtn = () => {
    setContentSchool(schools);
    setPaginaAtualCourses(1);
    setExibition(false);
  };

  const handleTagFilter = (tag: string) => {
    setFilterTag(tag);
    filterData(filterTag);
    setPaginaAtualCourses(1);
  };

  const indiceInicial = (paginaAtualCourses - 1) * itensPerPage;
  const indiceFinal = indiceInicial + itensPerPage;
  const coursesByPage = filterCourse.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(filterCourse.length / itensPerPage);
  const totalSchoolPages = Math.ceil(contentSchool.length / itensPerPage);

  const nextPage = () => {
    if (paginaAtualCourses < totalPaginas) {
      setPaginaAtualCourses(paginaAtualCourses + 1);
    }
  };

  const prevPage = () => {
    if (paginaAtualCourses > 1) {
      setPaginaAtualCourses(paginaAtualCourses - 1);
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

      {
        exibition ? (
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
        ) : ''
      }
      { exibition
        ? <CourseCard content={ coursesByPage } />
        : <InstitutionCard content={ contentSchool } /> }
      <div className={ style.pagContainer }>
        <button onClick={ prevPage } disabled={ paginaAtualCourses === 1 }>
          Anterior
        </button>
        <span>
          {paginaAtualCourses}
          {' '}
          de
          {' '}
          {exibition ? totalPaginas : totalSchoolPages}
        </span>
        <button
          onClick={ nextPage }
          disabled={ exibition
            ? paginaAtualCourses === totalPaginas
            : paginaAtualCourses === totalSchoolPages }
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default Formation;
