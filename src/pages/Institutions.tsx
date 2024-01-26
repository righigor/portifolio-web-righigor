import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { courses } from '../backend/coursesdb';
import { Courses } from '../types/Courses';
import CourseCard from '../components/CourseCard/CourseCard';
import { schools } from '../backend/schoolsdb';
import { Schools } from '../types/Schools';

function Institutions() {
  const schoolMock: Schools = {
    id: 0,
    name: 'Instituição não encontrada',
    description: '',
    image: '',
  };
  const { id } = useParams();
  const [contentCourse, setContentCourse] = useState<Courses[]>(courses);
  const [schoolArray, setSchoolArray] = useState(schools);
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
    filterData();
    filterSchool();
    setLoading(true);
  }, [contentCourse]);

  return (
    <div>
      <Helmet>
        <title>{ school.name }</title>
      </Helmet>
      <h1>{ school.name }</h1>
      <p>{ school.description }</p>
      {loading ? <CourseCard content={ filterCourse } /> : undefined}
    </div>
  );
}

export default Institutions;
