import { Courses } from '../../types/Courses';
import { Schools } from '../../types/Schools';

function CourseCard(content: Courses[] | Schools[]) {
  const array = content;
  return (
    <div>
      { array.map((course, i) => (
        <div key={ i }>{ course.description }</div>
      )) }

    </div>
  );
}

export default CourseCard;
