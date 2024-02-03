import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import style from './AboutMe.module.css';

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Sobre mim
        </title>
      </Helmet>
      <h1 className={ style.title }>about me</h1>
    </div>
  );
}

export default AboutMe;
