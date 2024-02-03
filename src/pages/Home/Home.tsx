/* eslint-disable react/jsx-max-depth */
/* eslint-disable @typescript-eslint/quotes */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import style from './Home.module.css';
import git from '../../icons/github-white-logo.svg';
import { user } from '../../backend/userdb';

function Home() {
  const [textoVisivel, setTextoVisivel] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const textoOriginal = 'Olá, Eu Sou Igor Righi_ _';

    const mostrarTexto = (i: number) => {
      setTextoVisivel(textoOriginal.substring(0, i));
    };

    let indice = 0;
    const intervalo = setInterval(() => {
      mostrarTexto(indice);
      indice++;

      if (indice > textoOriginal.length) {
        clearInterval(intervalo);
      }
    }, 100);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          { `Righigor's Portifolio` }
        </title>
      </Helmet>
      <div className={ style.container }>
        <div className={ style.textContainer }>
          <h1 className={ style.title }>{ textoVisivel }</h1>
          <p className={ style.description }>Desenvolvedor Full Stack.</p>
          <button className={ style.gitBtn }>
            <img src={ git } alt="" />
            <a href={ user.contact.github } target="_blank" rel="noopener noreferrer">
              Meu Perfil no GitHub
            </a>
          </button>
        </div>
        <div className={ style.imgContainer }>
          <img
            className={ style.pic }
            src={ user.profilePic }
            alt="Foto de perfil de Igor Righi"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
