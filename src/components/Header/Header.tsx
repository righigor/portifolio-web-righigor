import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
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
        <button>Meu Currículo</button>
      </div>
    </div>
  );
}

export default Header;
