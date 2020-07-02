import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <Route>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Route>
  );
};

export default App;
