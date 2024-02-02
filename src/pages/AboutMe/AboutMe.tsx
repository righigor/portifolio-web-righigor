import { useEffect } from 'react';
import style from './AboutMe.module.css';

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <h1 className={ style.title }>about me</h1>
  );
}

export default AboutMe;
