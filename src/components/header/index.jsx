import React, { memo } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = memo(() => {
  const location = useLocation();

  return (
    <div className={'header'}>
      <img src={require('../../assets/images/logo.png')} alt={'logo'} />
      <div className={'nav'}>
        <Link to={'/'}>
          <span className={location.pathname === '/' ? 'active' : ''}>Home</span>
        </Link>
        <Link to={'/characters'}>
          <span className={location.pathname === '/characters' ? 'active' : ''}>Characters</span>
        </Link>
      </div>
    </div>
  );
});

export default Header;
