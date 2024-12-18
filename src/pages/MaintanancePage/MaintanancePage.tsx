/* eslint-disable max-len */
import styles from './MaintanancePage.module.css';
import resume from '../../backend/resume/resume-igor-righi-front-end.pdf';

function MaintenancePage() {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Estou Trabalhando em uma Nova Versão!</h1>
      <p className={ styles.subtitle }>
        Fique ligado, em breve haverá novidades.
      </p>
      <p className={ styles.description }>
        Olá sou Igor Righi, Front-End Dev. Entre em contato através dos links
        abaixo e vamos conversar!
      </p>
      <div className={ styles.links }>
        <a
          href="https://www.linkedin.com/in/igor-righi/"
          className={ styles.link }
        >
          LinkedIn
        </a>
        <a href="https://github.com/righigor" className={ styles.link }>
          GitHub
        </a>
        <a href="mailto:righigordev@gmail.com" className={ styles.link }>
          E-mail
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/5531998397442"
          className={ styles.whatsappbutton }
          target="_blank"
          rel="noreferrer"
        >
          Entre em contato via WhatsApp
        </a>

        <a href={ resume } download className={ styles.button }>
          Meu Currículo
        </a>
      </div>
    </div>
  );
}

export default MaintenancePage;
