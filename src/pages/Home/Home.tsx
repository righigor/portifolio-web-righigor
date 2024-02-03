import { useEffect } from 'react';
import style from './Home.module.css';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <h1 className={ style.title }>Igor righi</h1>
  );
}

export default Home;
