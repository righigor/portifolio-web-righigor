import { useState } from 'react';
import { courses } from '../../backend/coursesdb';
import { schools } from '../../backend/schoolsdb';
import { Courses } from '../../types/Courses';
import { Schools } from '../../types/Schools';
import CourseCard from '../CourseCard/CourseCard';

const tagSearchBar = ['Front-End', 'Back-End', 'IA', 'Python', 'Machine Learning'];

function Formation() {
  const [contentCourse, setContentCourse] = useState<Courses[]>(courses);
  const [contentSchool, setContentSchool] = useState<Schools[]>(schools);
  const [exibition, setExibition] = useState(true);

  const handleCourseBtn = () => {
    setContentCourse(courses);
    setExibition(true);
  };

  const handleInstitutionsBtn = () => {
    setContentSchool(schools);
    setExibition(false);
  };

  return (
    <>
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
          >
            { tag }
          </button>
        ))}
      </div>
      { exibition ? <CourseCard
        content={ contentCourse }
      /> : <h2>test</h2> }
    </>
  );
}

export default Formation;
