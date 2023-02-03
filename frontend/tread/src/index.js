import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

ReactDOM.render(
    <GoogleOAuthProvider clientId="246999731991-ulo3h6t2spv097iq86thc2h2t5e4sb56.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);