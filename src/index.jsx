import 'bootstrap/dist/css/bootstrap.min.css';
import './css/stylesheet.css';
import './css/animate.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './components/Layout/Header/Header.component';

ReactDOM.render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById('root'),
);
