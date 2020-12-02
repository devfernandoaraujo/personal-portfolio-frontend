import { jsx, css, Global } from '@emotion/react/macro';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComingSoonComponent from './Components/ComingSoonComponent';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(

  <React.StrictMode>
    <ComingSoonComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();