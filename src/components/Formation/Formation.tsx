import { useState } from 'react';
import { courses } from '../../backend/coursesdb';
import { schools } from '../../backend/schoolsdb';
import { Courses } from '../../types/Courses';
import { Schools } from '../../types/Schools';
import CourseCard from '../CourseCard/CourseCard';

const tagSearchBar = ['Front-End', 'Back-End', 'IA', 'Python', 'Machine Learning'];

function Formation() {
  const [content, setContent] = useState<Courses[] | Schools[]>(courses);

  const handleCourseBtn = () => {
    setContent(courses);
    console.log(content);
  };

  const handleInstitutionsBtn = () => {
    setContent(schools);
    console.log(content);
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

      {/* <CourseCard
        content={ content }
      /> */}
    </>
  );
}

export default Formation;
