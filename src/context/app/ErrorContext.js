import React, { useContext, useReducer, createContext } from 'react';
import errorReducer from '../reducers/error';
import { ERROR_STATE } from '../initialStates';

export const ErrorContext = createContext(null);

export const ErrorConsumer = ErrorContext.Consumer;

const ErrorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(errorReducer, ERROR_STATE);
  return (
    <ErrorContext.Provider value={{ state, dispatch }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);

export default ErrorProvider;
