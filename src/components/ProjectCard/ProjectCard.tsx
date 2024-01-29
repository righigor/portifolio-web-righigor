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
          <Link to={ `/education/${project.id}` } key={ i } className={ style.container }>
            <div className={ style.card }>
              <img
                src={ project.images[0] }
                alt={ `certificado de ${project.name}` }
                className={ style.imgCard }
              />
            </div>
            <div>
              <h3 className={ style.nameCard }>{project.name}</h3>
              <p className={ style.sm }>Saiba mais...</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default ProjectCard;
