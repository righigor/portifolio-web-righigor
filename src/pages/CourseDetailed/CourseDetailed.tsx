import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { courses } from '../../backend/coursesdb';
import { Courses } from '../../types/Courses';
import { schools } from '../../backend/schoolsdb';
import { Schools } from '../../types/Schools';
import style from './CourseDetailed.module.css';

function CourseDetailed() {
  const { id } = useParams();
  const [course, setCourse] = useState<Courses>();
  const [school, setSchool] = useState<Schools>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCourse = courses.find((c) => c.id === Number(id));
    setCourse(getCourse);
    const getSchool = schools.find((s) => s.id === course?.school_id);
    setSchool(getSchool);
  }, [course, id]);

  return (
    <div className={ style.container }>
      <Helmet>
        <title>{course?.name}</title>
      </Helmet>
      <div>
        <p className={ style.diretorio }>
          <Link to="/education" className={ style.diretorioLink }>
            Cursos /
          </Link>
          { ` ${course?.name}` }
        </p>

        <div className={ style.title }>
          <h2 className={ style.name }>{`${course?.name}`}</h2>
          <h2 className={ style.divisor }>-</h2>
          <Link to={ `/institutions/${school?.id}` } className={ style.titleLink }>
            <h2>{` ${school?.name}`}</h2>
          </Link>
        </div>

        <div className={ style.img }>
          <img
            src={ course?.certificate.image }
            alt={ `Certifica de ${course?.name}` }

          />
        </div>
        {/* <div className={ style.tagsContainer }>
          <span>Tags:</span>
          {course?.tags.map((t, i) => <span key={ i }>{`${t},`}</span>)}
        </div> */}
        <div className={ style.description }>
          {course?.description}
        </div>
        <div className={ style.dates }>
          <div className={ style.dateDiv }>
            <h3>Iniciado em:</h3>
            <p>{course?.date.started_at}</p>
          </div>
          <div className={ style.dateDiv }>
            <h3>Finalizado em:</h3>
            <p>{course?.date.ended_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailed;
