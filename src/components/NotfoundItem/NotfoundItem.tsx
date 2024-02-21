import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import style from './NotfoundItem.module.css';

type NotfoundItemProp = {
  title: string,
  link: string,
  btn: string,
};

function NotfoundItem({ title, link, btn }: NotfoundItemProp) {
  return (
    <div className={ style.notFound }>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <p>{ title }</p>
      <button>
        <Link
          to={ link }
          className={ style.linkbtn }
        >
          { btn }
        </Link>
      </button>
    </div>
  );
}

export default NotfoundItem;
