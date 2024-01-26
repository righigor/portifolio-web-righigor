import { Link } from 'react-router-dom';
import style from './Header.module.css';
import curriculo from '../../resume/curriculo-igor-righi.pdf';

function Header() {
  const handleBtnDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'curriculo-igor-righi';
    link.click();
  };

  return (
    <div className={ style.headerContainer }>
      <Link to="/">
        <div>
          <span className={ style.name }>Igor Righi</span>
        </div>
      </Link>

      <div className={ style.linksContainer }>
        <Link to="about-me">
          <span>
            Sobre Mim
          </span>
        </Link>

        <Link to="skills">
          <span>Habilidades</span>
        </Link>

        <Link to="projects">
          <span>Projetos</span>
        </Link>

        <Link to="education">
          <span>Formação</span>
        </Link>

        <Link to="contact">
          <span>Contato</span>
        </Link>
      </div>
      <div>
        <button
          onClick={ handleBtnDownload }
        >
          Meu Currículo
        </button>
      </div>
    </div>
  );
}

export default Header;
