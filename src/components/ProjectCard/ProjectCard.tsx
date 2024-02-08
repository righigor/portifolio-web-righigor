import { Link } from 'react-router-dom';
import { Projects } from '../../types/Projects';
import style from './ProjectCard.module.css';

type ProjectCardProp = {
  content: Projects[]
};

function ProjectCard({ content }: ProjectCardProp) {
  const array = content;
  return (
    <div className={ style.cardContainer }>
      {
        array.map((project, i) => (
          <Link to={ `/projects/${project.id}` } key={ i } className={ style.container }>
            <div className={ style.card }>
              <img
                src={ project.header }
                alt={ `Capa do ${project.name}` }
                className={ style.imgCard }
              />
            </div>
            <div>
              <h3 className={ style.nameCard }>{project.name}</h3>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default ProjectCard;
