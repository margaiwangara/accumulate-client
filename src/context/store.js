import React from 'react';
import AuthProvider from './app/AuthContext';
import ErrorProvider from './app/ErrorContext';
import ArticleProvider from './app/ArticleContext';
import HeaderProvider from './app/HeaderContext';

function ContextStore({ children }) {
  return (
    <AuthProvider>
      <ErrorProvider>
        <ArticleProvider>
          <HeaderProvider>{children}</HeaderProvider>
        </ArticleProvider>
      </ErrorProvider>
    </AuthProvider>
  );
}

export default ContextStore;
