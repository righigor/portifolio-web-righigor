import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not Found</title>
      </Helmet>
      <h1>Not Found</h1>
      <Link to="/">
        <h2>volte para home page</h2>
      </Link>
    </>
  );
}

export default NotFound;
