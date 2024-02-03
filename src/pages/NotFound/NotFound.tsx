import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not Found</title>
      </Helmet>
      <div className={ style.container }>
        <h1>Not Found</h1>
        <Link to="/">
          <h2>Volte para a página inicial</h2>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
