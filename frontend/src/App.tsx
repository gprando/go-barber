import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
