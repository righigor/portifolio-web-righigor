/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.css';
import curriculo from '../../resume/igor-righi-curriculo.pdf';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [widthScreen, setWidhScreen] = useState({
    largura: window.innerWidth,
  });

  const atualizarTamanhoDaTela = () => {
    setWidhScreen({
      largura: window.innerWidth,
    });
  };

  useEffect(() => {
    // Adiciona um listener de redimensionamento quando o componente é montado
    window.addEventListener('resize', atualizarTamanhoDaTela);

    // Remove o listener de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', atualizarTamanhoDaTela);
    };
  }, []);

  const handleBtnDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'curriculo-igor-righi';
    link.click();
  };

  return (
    <div className={ style.headerContainer }>
      <Link to="/" className={ style.name }>
        <div>
          <span>Igor Righi</span>
        </div>
      </Link>
{/*
      { widthScreen.largura <= 576
        ? <div className={ style.mobileMenuButton } onClick={ () => setOpenMenu(!openMenu) }>
            <FontAwesomeIcon icon={ openMenu ? faTimes : faBars } />
          </div>
        : undefined} */}
      <div className={ `${style.linkContainer} ${openMenu ? style.mobileMenuOpen : ''}` }>
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

      <div>
        <button
          title="Faça download do meu currículo"
          className={ style.btn }
          onClick={ handleBtnDownload }
        >
          Meu Currículo
        </button>
      </div>
    </div>
  );
}

export default Header;
