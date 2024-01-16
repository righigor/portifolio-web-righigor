import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { courses } from '../../backend/coursesdb';
import { schools } from '../../backend/schoolsdb';
import { Courses } from '../../types/Courses';
import { Schools } from '../../types/Schools';
import CourseCard from '../CourseCard/CourseCard';

const tagSearchBar = ['All', 'Front-End', 'Back-End', 'IA', 'Python', 'Machine Learning'];

function Formation() {
  const [contentCourse, setContentCourse] = useState<Courses[]>(courses);
  const [filterCourse, setFilterCourse] = useState<Courses[]>(courses);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [contentSchool, setContentSchool] = useState<Schools[]>(schools);
  const [exibition, setExibition] = useState(true);

  const filterData = (tag: string) => {
    if (tag === 'All') {
      setFilterCourse(courses);
    }
    const data = contentCourse.filter((c) => c.tags.includes(tag));
    setFilterCourse(data);
  };

  // useEffect(() => {
  //   filterData(filterTag);
  // }, [filterTag]);

  const handleCourseBtn = () => {
    setContentCourse(courses);
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
  return (
    <>
      <Helmet>
        <title>Formação</title>
      </Helmet>
      <label htmlFor="">
        <input type="text" name="" id="" placeholder="Buscar..." />
        <button>Buscar</button>
      </label>

      <div>
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
      <div>
        {tagSearchBar.map((tag, i) => (
          <button
            key={ i }
            onClick={ () => handleTagFilter(tag) }
          >
            { tag }
          </button>
        ))}
      </div>
      { exibition ? <CourseCard
        content={ filterCourse }
      /> : <h2>test</h2> }
    </>
  );
}

export default Formation;
