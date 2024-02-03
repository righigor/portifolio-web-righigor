import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import style from './Skills.module.css';
import SkillsTimeline from '../../components/SkillsTimeline/SkillsTimeline';

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Habilidades</title>
      </Helmet>
      <h1 className={ style.title }>Habilidades</h1>
      <SkillsTimeline />
    </div>
  );
}

export default Skills;
