/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './DropMenu.module.css';
import { usePageContext } from '../../provider/pageProvider';
import { handleBtnDownload } from '../../utils/handleBtnDownload';
import hamMenu from '../../icons/hamburguer-menu.svg';
import closeMenu from '../../icons/close-menu.svg';

function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPaginaAtualProjects,
    setPaginaAtualCourses, setExibition,
    lang,
  } = usePageContext();

  const closeMenuLink = () => {
    setIsOpen(false);
    setPaginaAtualCourses(1);
    setPaginaAtualProjects(1);
    setExibition(true);
  };

  return (
    <div>
      <div>
        <button
          onClick={ () => setIsOpen(!isOpen) }
          className={ `${style.menuBtn} ${isOpen ? style.open : ''}` }
        >
          { }
          <img src={ isOpen ? '' : hamMenu } alt="Botão para abrir o Menu Mobile" />
        </button>
      </div>

      <div className={ `${style.menuContent} ${isOpen ? style.open : style.close}` }>
        <div className={ style.menuContainer }>
          <button
            onClick={ () => setIsOpen(!isOpen) }
            className={ style.closeBtn }
          >
            { }
            <img src={ closeMenu } alt="Botão para fechar o Menu Mobile" />
          </button>
          <div className={ style.linkContainer }>
            <Link to="/" className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Início</span>
            </Link>
            <div className={ style.linkbottom } />
            <Link to="skills" className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Habilidades</span>
            </Link>
            <div className={ style.linkbottom } />
            <Link to="projects" className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Projetos</span>
            </Link>
            <div className={ style.linkbottom } />
            <Link to="education" className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Formação</span>
            </Link>
            <div className={ style.linkbottom } />
            <Link to="contact" className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Contato</span>
            </Link>
            <div className={ style.linkbottom } />
            <button
              title={ lang === 'pt' ? 'Baixar Currículo' : 'Download Resume' }
              className={ style.btn }
              onClick={ () => handleBtnDownload(lang) }
            >
              { lang === 'pt' ? 'Meu Currículo' : 'My Resume' }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
