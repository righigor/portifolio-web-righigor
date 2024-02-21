/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './ProjectsDetailed.module.css';
import { projects } from '../../backend/projectsdb';
import { schools } from '../../backend/schoolsdb';
import { Projects } from '../../types/Projects';
import { Schools } from '../../types/Schools';
import githubLogo from '../../icons/github-white-logo.svg';
import NotfoundItem from '../../components/NotfoundItem/NotfoundItem';

function ProjectsDetailed() {
  const { id } = useParams();
  const [project, setProject] = useState<Projects>();
  const [school, setSchool] = useState<Schools>();
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProject = projects.find((c) => c.id === Number(id));
    setProject(getProject);
    const getSchool = schools.find((s) => s.id === project?.school_id);
    setSchool(getSchool);
  }, [projects, id, school, project]);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImg();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imgIndex]);

  useEffect(() => {
    nextImg();
  }, []);

  if (!project) {
    return (
      <NotfoundItem title="Projeto não encontrado." link="/projects" btn="Voltar para Projetos" />
    );
  }

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
          <p>
            { project?.description}
            { school
              ? <Link className={ style.linkSchool } to={ `/institutions/${school?.id}` }>{ `${school?.name}.` }</Link>
              : undefined}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetailed;
