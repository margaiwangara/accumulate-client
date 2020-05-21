import React from 'react';
import AuthProvider from './app/AuthContext';

function ContextStore({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ContextStore;
