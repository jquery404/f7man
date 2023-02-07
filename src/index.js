import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

// Amplify libraries
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
