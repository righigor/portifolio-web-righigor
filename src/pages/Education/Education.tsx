import { useEffect } from 'react';
import Formation from '../../components/Formation/Formation';
import style from './Education.module.css';

function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className={ style.title }>Formação</h1>
      <Formation />
    </>
  );
}

export default Education;
