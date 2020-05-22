import React from 'react';
import AuthProvider from './app/AuthContext';
import ErrorProvider from './app/ErrorContext';
import ArticleProvider from './app/ArticleContext';

function ContextStore({ children }) {
  return (
    <AuthProvider>
      <ErrorProvider>
        <ArticleProvider>{children}</ArticleProvider>
      </ErrorProvider>
    </AuthProvider>
  );
}

export default ContextStore;
