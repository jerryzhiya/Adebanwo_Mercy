// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This is where Tailwind directives live
import App from './App';

// React 18+ Root Creation
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);