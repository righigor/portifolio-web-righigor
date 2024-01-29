/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../../backend/userdb';
import linkedin from '../../icons/linkedin-white-logo.svg';
import wpp from '../../icons/wpp-white-logo.svg';
import email from '../../icons/email-icon.svg';
import copy from '../../icons/copy-icon.svg';
import style from './OtherContacts.module.css';

function OtherContacts() {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(user.contact.email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className={ style.container }>
      <div className={ style.header }>
        <h3>Outras formas de entrar em contato</h3>
        <p>Se preferir me contactar de forma de diferente, pode me procurar em qualquer uma das redes abaixo:</p>
      </div>

      <ul className={ style.linkContainer }>
        <li className={ style.liLink }>
          <a href={ user.contact.linkedin } target="_blank" rel="noopener noreferrer">
            <img src={ linkedin } alt="Linkedin logo" />
            <p>Linkedin</p>
          </a>
        </li>
        <li className={ style.liLink }>
          <a href={ user.contact.wpp } target="_blank" rel="noopener noreferrer">
            <img src={ wpp } alt="WhatsApp logo" />
            <p>WhatsApp</p>
          </a>
        </li>
        <li className={ style.emailLink }>
          <img src={ email } alt="" />
          <p>{ user.contact.email }</p>
          <button
            onClick={ handleClick }
            className={ style.btnCopy }
            title="Copiar email"
          >
            {copied
              ? <p className={ style.btnCopied }>Email copiado!</p>
              : <img src={ copy } alt="Copiar email" />}
          </button>
        </li>
      </ul>

    </div>
  );
}

export default OtherContacts;
