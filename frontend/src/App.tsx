import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToasContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
