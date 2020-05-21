import React from 'react';
import AuthProvider from './app/AuthContext';
import ErrorProvider from './app/ErrorContext';

function ContextStore({ children }) {
  return (
    <AuthProvider>
      <ErrorProvider>{children}</ErrorProvider>
    </AuthProvider>
  );
}

export default ContextStore;
