import { Link } from 'react-router-dom';
import style from './NavMenu.module.css';
import curriculo from '../../resume/igor-righi-curriculo.pdf';

function NavMenu() {
  const handleBtnDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'curriculo-igor-righi';
    link.click();
  };

  return (
    <>
      <div className={ style.linkContainer }>
        <Link to="skills" className={ style.linkStyle }>
          <span>Habilidades</span>
        </Link>

        <Link to="projects" className={ style.linkStyle }>
          <span>Projetos</span>
        </Link>

        <Link to="education" className={ style.linkStyle }>
          <span>Formação</span>
        </Link>

        <Link to="contact" className={ style.linkStyle }>
          <span>Contato</span>
        </Link>
      </div>
      <div>
        <button
          title="Faça download do meu currículo"
          className={ style.btn }
          onClick={ handleBtnDownload }
        >
          Meu Currículo
        </button>
      </div>
    </>
  );
}

export default NavMenu;
