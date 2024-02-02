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
          <div className={ style.card }>
            <img
              src={ course.certificate.image }
              alt={ `certificado de ${course.name}` }
              className={ style.imgCard }
            />
          </div>
          <div>
            <h3 className={ style.nameCard }>{course.name}</h3>
          </div>
        </Link>

      )) }

    </div>
  );
}

export default CourseCard;
