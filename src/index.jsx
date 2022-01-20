import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import '../assets/stylesheets/application.scss';
import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}
