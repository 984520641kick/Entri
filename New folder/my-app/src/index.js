// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure you have some base styles
import App from './App';
import { ThemeProvider } from './ThemeContext';

import 'bootstrap/dist/css/bootstrap.min.css';


  ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,

  
    document.getElementById('root')

);

