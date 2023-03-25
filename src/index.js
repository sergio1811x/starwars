import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/normalize.css';
import './style/index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
