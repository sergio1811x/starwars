import React, { memo } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = memo(() => {
  return (
    <div className={'header'}>
      <img src={require('../../assets/images/logo.png')} alt={'logo'} />
      <div className={'nav'}>
        <Link to={'/'}>
          <span>Home</span>
        </Link>
        <Link to={'/Characters'}>
          <span>Characters</span>
        </Link>
      </div>
    </div>
  );
});

export default Header;
