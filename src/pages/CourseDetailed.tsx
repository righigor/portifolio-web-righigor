import { useParams } from 'react-router-dom';

function CourseDetailed() {
  const { id } = useParams();
  return (
    <h2>{ `id do course: ${id}` }</h2>
  );
}

export default CourseDetailed;
