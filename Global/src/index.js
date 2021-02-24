// CORE REACT IMPORTS --------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// LOCAL APP IMPORTS ---------------------------------
import './index.css';

// DEFAULT APP LAYOUT --------------------------------
ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// Do not unregister the service worker
serviceWorkerRegistration.register();

// TODO: add an api end point to recieve and record performance data
reportWebVitals();
