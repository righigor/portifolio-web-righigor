import { Link } from 'react-router-dom';
import githubLogo from '../../icons/github-white-logo.svg';
import linkedinLogo from '../../icons/linkedin-white-logo.svg';
import instaLogo from '../../icons/insta-logo.svg';
import wppLogo from '../../icons/wpp-white-logo.svg';
import style from './Footer.module.css';
import { user } from '../../backend/userdb';

function Footer() {
  return (
    <div className={ style.container }>
      <div className={ style.logos }>
        <a href={ user.contact.github } target="_blank" rel="noopener noreferrer">
          <img src={ githubLogo } alt="Github logo" />
        </a>

        <a href={ user.contact.linkedin } target="_blank" rel="noopener noreferrer">
          <img src={ linkedinLogo } alt="Linkedin logo" />
        </a>

        <a href={ user.contact.instagram } target="_blank" rel="noopener noreferrer">
          <img src={ instaLogo } alt="Instagram logo" />
        </a>

        <a href={ user.contact.wpp } target="_blank" rel="noopener noreferrer">
          <img src={ wppLogo } alt="WhatsApp logo" />
        </a>
      </div>

      <div className={ style.linksContainer }>
        <Link to="about-me" className={ style.linkStyle }>
          <span>
            Sobre Mim
          </span>
        </Link>

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

      <Link to="/" className={ style.linkStyle }>
        <div>
          <span className={ style.name }>Igor Righi</span>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
