import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
      <App />

  </ThemeProvider>
);
