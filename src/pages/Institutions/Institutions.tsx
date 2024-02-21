import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { courses } from '../../backend/coursesdb';
import { Courses } from '../../types/Courses';
import CourseCard from '../../components/CourseCard/CourseCard';
import { schools } from '../../backend/schoolsdb';
import { Schools } from '../../types/Schools';
import style from './Institutions.module.css';
import NotfoundItem from '../../components/NotfoundItem/NotfoundItem';

function Institutions() {
  const schoolMock: Schools = {
    id: 0,
    name: 'Instituição não encontrada',
    description: '',
    image: '',
  };
  const { id } = useParams();
  const [contentCourse] = useState<Courses[]>(courses);
  const [schoolArray] = useState(schools);
  const [school, setSchool] = useState<Schools>(schoolMock);
  const [filterCourse, setFilterCourse] = useState<Courses[]>(courses);
  const [loading, setLoading] = useState(false);

  const filterData = () => {
    const data = contentCourse.filter((c) => c.school_id === Number(id));
    setFilterCourse(data);
  };

  const filterSchool = () => {
    const data = schoolArray.find((s) => s.id === Number(id)) as Schools;
    setSchool(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterData();
    filterSchool();
    setLoading(true);
  }, [contentCourse]);

  if (!school) {
    return (
      <NotfoundItem
        title="Instituição não encontrada"
        link="/education"
        btn="Voltar para Instituições"
      />
    );
  }

  return (
    <div className={ style.container }>
      <Helmet>
        <title>{ school.name }</title>
      </Helmet>
      <p className={ style.diretorio }>
        <Link to="/education" className={ style.diretorioLink }>
          Instituições /
        </Link>
        { ` ${school?.name}` }
      </p>
      <h1 className={ style.title }>{ school.name }</h1>
      <p className={ style.description }>{ school.description }</p>
      {loading ? <CourseCard content={ filterCourse } /> : undefined}
    </div>
  );
}

export default Institutions;
