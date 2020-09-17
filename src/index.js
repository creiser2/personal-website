import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/San-Francisco-Pro-Fonts/SF-Pro-Display-Light.otf';
import './fonts/San-Francisco-Pro-Fonts/SF-Pro-Display-Thin.otf';
import './fonts/San-Francisco-Pro-Fonts/SF-Pro-Display-ThinItalic.otf';
import './fonts/San-Francisco-Pro-Fonts/SF-Pro-Display-Semibold.otf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
