/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './DropMenu.module.css';
import curriculo from '../../resume/igor-righi-curriculo.pdf';
import hamMenu from '../../icons/hamburguer-menu.svg';
import closeMenu from '../../icons/close-menu.svg';

function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenuLink = () => {
    setIsOpen(false);
  };

  const handleBtnDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'curriculo-igor-righi';
    link.click();
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
              title="Faça download do meu currículo"
              className={ style.btn }
              onClick={ handleBtnDownload }
            >
              Meu Currículo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
