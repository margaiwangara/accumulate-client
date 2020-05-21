import React, { createContext, useContext, useReducer } from 'react';
import authReducer from '../reducers/auth';
import { authState } from '../initialStates';

export const AuthContext = createContext(null);

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
