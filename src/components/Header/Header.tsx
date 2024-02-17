import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import DropMenu from './DropMenu';
import NavMenu from './NavMenu';

function Header() {
  const [widthScreen, setWidhScreen] = useState({
    largura: window.innerWidth,
  });
  const atualizarTamanhoDaTela = () => {
    setWidhScreen({
      largura: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', atualizarTamanhoDaTela);
    return () => {
      window.removeEventListener('resize', atualizarTamanhoDaTela);
    };
  }, []);

  return (
    <div className={ style.headerContainer }>
      <Link to="/" className={ style.name }>
        <div>
          <span>Igor Righi</span>
        </div>
      </Link>
      {(widthScreen.largura > 768)
        ? <NavMenu />
        : <DropMenu />}
    </div>
  );
}

export default Header;
