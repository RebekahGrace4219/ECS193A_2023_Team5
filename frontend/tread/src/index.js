import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<GoogleOAuthProvider clientId="408342634218-a5cl4tkm2h1jrihi1ct73h14ev4oas7b.apps.googleusercontent.com">
<React.StrictMode>
    <App />
</React.StrictMode>
</GoogleOAuthProvider>);
