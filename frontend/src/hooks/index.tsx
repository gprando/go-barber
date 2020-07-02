import React from 'react';

import { AuthProvider } from './auth';
import { ToasProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToasProvider>{children}</ToasProvider>
    </AuthProvider>
  );
};

export default AppProvider;
