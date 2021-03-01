import { jsx, css } from '@emotion/react/macro';
import { injectGlobal } from '@emotion/css/macro';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComingSoonComponent from './Components/ComingSoonComponent';
import App from './App';
import reportWebVitals from './reportWebVitals';

injectGlobal`
  *{
    padding: 0;
    margin: 0;
  }

  *, ::after,::before{
    box-sizing: border-box;
  }

  div{
    display: block;
  }

  body{
    line-height: 30px;
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    color: #797979;
    font-weight: 400;
    text-align: left;
    background-color: #fff;
  }

  img, svg{
    vertical-align: middle;
  }

  img{
    border-style: none;
  }
`


ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
