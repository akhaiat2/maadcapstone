import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from 'react-live-clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div class="laptop">
        <div class="clock">
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'}/>
        </div>
        <h2>.</h2>
        <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
