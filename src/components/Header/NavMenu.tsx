import { Link } from 'react-router-dom';
import { usePageContext } from '../../provider/pageProvider';
import style from './NavMenu.module.css';
import { handleBtnDownload } from '../../utils/handleBtnDownload';

function NavMenu() {
  const { setPaginaAtualProjects,
    setPaginaAtualCourses, setExibition,
    lang,
  } = usePageContext();

  const handleClick = () => {
    setPaginaAtualCourses(1);
    setPaginaAtualProjects(1);
    setExibition(true);
  };

  return (
    <>
      <div className={ style.linkContainer }>
        <Link
          to="skills"
          className={ style.linkStyle }
        >
          <span>Habilidades</span>
        </Link>

        <Link
          to="projects"
          className={ style.linkStyle }
          onClick={ handleClick }
        >
          <span>Projetos</span>
        </Link>

        <Link
          to="education"
          className={ style.linkStyle }
          onClick={ handleClick }
        >
          <span>Formação</span>
        </Link>

        <Link to="contact" className={ style.linkStyle }>
          <span>Contato</span>
        </Link>
      </div>
      <div>
        <button
          title={ lang === 'pt' ? 'Baixar Currículo' : 'Download Resume' }
          className={ style.btn }
          onClick={ () => handleBtnDownload(lang) }
        >
          { lang === 'pt' ? 'Meu Currículo' : 'My Resume' }
        </button>
      </div>

    </>
  );
}

export default NavMenu;
