import React from 'react';
import Header from '../header';
import './index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <div className={'home'}>
        <div className={'home__block'}>
          <span className={'home__title'}>
            Find <span className={'home__title_weight'}> all your favorite character </span>
            character
          </span>
          <h2 className={'home__info'}>
            You can find out all the information about your favorite characters
          </h2>
          <Link to={'/characters'}>
            <button className={'home__button'}>See more...</button>
          </Link>
        </div>
        <div>
          <img src={require('../../assets/images/yoda.png')} alt={'yoda'} />
        </div>
      </div>
    </>
  );
};

export default Home;
