
import React  from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Messenger from './components/MessengerFile';
import AccountProvider from './context/AccountProvider';


function App() {

  const clientId = '424442876725-1liqs6mssirgafmj2h1r3rumpq6i9hkn.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
