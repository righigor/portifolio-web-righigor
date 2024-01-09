import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">
        <h2>volte para home page</h2>
      </Link>
    </>
  );
}

export default NotFound;
