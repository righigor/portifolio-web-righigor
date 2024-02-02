import { useEffect } from 'react';
import style from './Skills.module.css';

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <h1 className={ style.title }>Habilidades</h1>
  );
}

export default Skills;
