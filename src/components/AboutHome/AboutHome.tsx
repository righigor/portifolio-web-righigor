import { handleBtnDownload } from '../../utils/handleBtnDownload';
import style from './AboutHome.module.css';
import aboutPic from '../../images/about-capa.jpeg';
import { react, ts, css, python, docker, sql } from '../../icons/skills';
import resumeLogo from '../../icons/resume-icon.svg';
import { user } from '../../backend/userdb';
import { usePageContext } from '../../provider/pageProvider';

function AboutHome() {
  const { lang } = usePageContext();

  return (
    <div className={ style.divContainer }>
      <div className={ style.aboutContainer }>
        <div className={ style.imgContainer }>
          <img
            src={ aboutPic }
            alt="Imagem de um Programador usando um computador Gerada por IA"
            width="80%"
          />
        </div>
        <div className={ style.descContainer }>
          <div className={ style.skillsContainer }>
            <img src={ react } alt="ReactJS Logo" width="20px" />
            <img src={ ts } alt="TypeScript Logo" width="20px" />
            <img src={ css } alt="CSS Logo" width="20px" />
            <img src={ python } alt="Python Logo" width="20px" />
            <img src={ docker } alt="Docker Logo" width="20px" />
            <img src={ sql } alt="MySql Logo" width="20px" />
          </div>
          <h2 className={ style.title }>Sobre mim</h2>
          <h4 className={ style.subtitle }>Sou um desenvolvedor Full-Stack</h4>
          <span className={ style.desc }>
            {user.about}
          </span>

          <button
            title={ lang === 'pt' ? 'Baixar Currículo' : 'Download Resume' }
            className={ style.btn }
            onClick={ () => handleBtnDownload(lang) }
          >
            <img src={ resumeLogo } alt="" />
            <span>
              { lang === 'pt' ? 'Meu Currículo' : 'My Resume' }
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
