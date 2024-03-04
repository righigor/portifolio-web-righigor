import { usePageContext } from '../../provider/pageProvider';
import style from './ChangeLang.module.css';

function ChangeLang() {
  const { lang, setLang } = usePageContext();
  return (
    <div>
      <button
        onClick={ () => setLang(lang === 'pt' ? 'en' : 'pt') }
        className={ style.langBtn }
      >
        {lang === 'pt' ? 'en' : 'pt'}
      </button>
    </div>
  );
}

export default ChangeLang;
