import React, { createContext, useContext, useReducer } from 'react';
import { HEADER_STATE } from '../initialStates';
import headerReducer from '../reducers/header';

export const HeaderContext = createContext(null);

export const HeaderConsumer = HeaderContext.Consumer;

const HeaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(headerReducer, HEADER_STATE);
  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);

export default HeaderProvider;
