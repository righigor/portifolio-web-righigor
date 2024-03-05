import { Link } from 'react-router-dom';
import style from './QuickContact.module.css';

function QuickContact() {
  return (
    <div className={ style.container }>
      <h2>Me envie uma mensagem por aqui :)</h2>
      <div className={ style.btnContact }>
        <Link to="/contact" className={ style.link }>
          <span>Entre em Contato</span>
        </Link>
      </div>
    </div>
  );
}

export default QuickContact;
