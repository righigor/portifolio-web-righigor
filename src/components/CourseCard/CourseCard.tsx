import { Link } from 'react-router-dom';
import { Courses } from '../../types/Courses';
import style from './CourseCard.module.css';

type CourseCardProp = {
  content: Courses[]
};

function CourseCard({ content }: CourseCardProp) {
  const array = content;
  return (
    <div className={ style.cardContainer }>
      { array.map((course, i) => (
        <Link to={ `/education/${course.id}` } key={ i } className={ style.container }>
          <div>
            <img src={ course.certificate.image } alt="" width="200px" />
          </div>
          <div>
            <h2>{course.name}</h2>
          </div>
        </Link>

      )) }

    </div>
  );
}

export default CourseCard;
