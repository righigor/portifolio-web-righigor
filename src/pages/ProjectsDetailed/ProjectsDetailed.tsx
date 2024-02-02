/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './ProjectsDetailed.module.css';
import { projects } from '../../backend/projectsdb';
import { Projects } from '../../types/Projects';
import githubLogo from '../../icons/github-white-logo.svg';

function ProjectsDetailed() {
  const { id } = useParams();
  const [project, setProject] = useState<Projects>();
  const [imgIndex, setImgIndex] = useState(0);
  const [maxLength, setMaxLength] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProject = projects.find((c) => c.id === Number(id));
    setProject(getProject);
    if (project !== undefined) {
      setMaxLength(project.images.length);
    }
  }, [projects, id]);

  const nextImg = () => {
    if (project && project.images.length) {
      setImgIndex((imgIndex + 1) % project.images.length);
    }
  };

  const backImg = () => {
    if (project && project.images.length) {
      setImgIndex((imgIndex - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className={ style.container }>
      <Helmet>
        <title>{ project?.name }</title>
      </Helmet>
      <div>
        <p className={ style.diretorio }>
          <Link to="/projects" className={ style.diretorioLink }>
            Projetos /
          </Link>
          { ` ${project?.name} ` }
        </p>

        <div className={ style.title }>
          <h2 className={ style.name }>{`${project?.name}`}</h2>
        </div>

        <div className={ style.img }>
          <div className={ style.carrossel }>
            <button onClick={ backImg }>&lt;</button>
            <img src={ project?.images[imgIndex] } alt={ `Imagem do Projeto ${imgIndex + 1}` } />
            <button onClick={ nextImg }>&gt;</button>
          </div>
          <div className={ style.linkGit }>
            <a href={ project?.github_link } target="_blank" rel="noopener noreferrer">
              <img src={ githubLogo } alt="Github logo" width="20px" />
            </a>
          </div>
        </div>

        <div className={ style.description }>
          {project?.description}
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetailed;
