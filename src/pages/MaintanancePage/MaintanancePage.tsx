import styles from './MaintanancePage.module.css';

function MaintenancePage() {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Estou Trabalhando em uma Nova Versão!</h1>
      <p className={ styles.subtitle }>Fique ligado, em breve haverá novidades.</p>
      <p className={ styles.description }>
        Olá sou Igor Righi, Front-End Dev. Entre em contato
        através dos links abaixo e vamos conversar!
      </p>
      <div className={ styles.links }>
        <a href="https://www.linkedin.com/in/igor-righi/" className={ styles.link }>LinkedIn</a>
        <a href="https://github.com/righigor" className={ styles.link }>GitHub</a>
        <a href="mailto:righigordev@gmail.com" className={ styles.link }>E-mail</a>
      </div>
      <div>
        <a
          href="/path/to/seu-curriculo.pdf"
          download
          className={ styles.button }
        >
          Meu Currículo
        </a>
      </div>
    </div>
  );
}

export default MaintenancePage;
