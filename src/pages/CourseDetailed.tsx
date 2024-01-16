import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { courses } from '../backend/coursesdb';
import { Courses } from '../types/Courses';
import { schools } from '../backend/schoolsdb';
import { Schools } from '../types/Schools';

function CourseDetailed() {
  const { id } = useParams();
  const [course, setCourse] = useState<Courses>();
  const [school, setSchool] = useState<Schools>();

  useEffect(() => {
    const getCourse = courses.find((c) => c.id === Number(id));
    setCourse(getCourse);
    const getSchool = schools.find((s) => s.id === course?.school_id);
    setSchool(getSchool);
  }, [course, id]);

  return (
    <div>
      <Helmet>
        <title>{course?.name}</title>
      </Helmet>
      <div>
        <h2>{course?.name}</h2>
        <h4>{school?.name}</h4>
        <img
          src={ course?.certificate.image }
          alt={ `Certifica de ${course?.name}` }
          width="200px"
        />
        <div>
          {course?.tags.map((t, i) => <span key={ i }>{t}</span>)}
        </div>
        <div>
          {course?.description}
        </div>
        <div>
          <h3>Iniciado em:</h3>
          <p>{course?.date.started_at}</p>
          <h3>Terminado em:</h3>
          <p>{course?.date.ended_at}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailed;
