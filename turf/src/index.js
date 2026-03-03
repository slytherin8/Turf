import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './App.css';
import './styles/authLayout.css';
import './styles/login.css';
import './styles/signup.css';
import './components/Navbar.css';
import './components/Sidebar.css';
import './styles/about.css';
import './styles/contact.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);