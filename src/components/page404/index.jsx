import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className={'wrapper'}>
      <img src={require('../../assets/images/404.png')} alt={'img'} />
      <Link to={'/'}>
        <button>Return</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
