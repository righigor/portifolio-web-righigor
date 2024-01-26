import { Link } from 'react-router-dom';
import githubLogo from '../../icons/github-white-logo.svg';
import linkedinLogo from '../../icons/linkedin-white-logo.svg';
import instaLogo from '../../icons/instagram-white-logo.svg';
import wppLogo from '../../icons/wpp-white-logo.svg';
import style from './Footer.module.css';
import { user } from '../../backend/userdb';

function Footer() {
  return (
    <div className={ style.container }>
      <div className={ style.logos }>
        <Link to={ user.contact.github }>
          <img src={ githubLogo } alt="Github logo" />
        </Link>

        <Link to={ user.contact.linkedin }>
          <img src={ linkedinLogo } alt="Linkedin logo" />
        </Link>

        <Link to={ user.contact.instagram }>
          <img src={ instaLogo } alt="Instagram logo" />
        </Link>

        <Link to={ user.contact.wpp }>
          <img src={ wppLogo } alt="WhatsApp logo" />
        </Link>
      </div>

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

      <Link to="/">
        <div>
          <span className={ style.name }>Igor Righi</span>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
