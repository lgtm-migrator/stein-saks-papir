import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './components/Layout/Header/Header.component';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"

ReactDOM.render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById('root'),
);
