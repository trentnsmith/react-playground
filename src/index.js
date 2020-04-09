import React from 'react';
import ReactDOM from 'react-dom';
import App from './paltrows-power-toes/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import AppLang from './lang-context/AppLang';


ReactDOM.render(
    <AppLang />, 
    document.getElementById('root')
    );