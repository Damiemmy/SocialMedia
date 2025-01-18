import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthDarkmodeProvider} from './context/Darkmodecontext';
import { AuthcontextProvider } from './context/Authcontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthcontextProvider>
    <AuthDarkmodeProvider>
    <App />
    </AuthDarkmodeProvider>
    </AuthcontextProvider>
    
  </React.StrictMode>
  
);

