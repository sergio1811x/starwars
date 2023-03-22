import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import PageNotFound from './page404';
import Characters from './сharacters';

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Navigation;
