import React, { createContext, useContext, useReducer } from 'react';
import articleReducer from '../reducers/article';
import { ARTICLE_STATE } from '../initialStates';

export const ArticleContext = createContext(null);

export const ArticleConsumer = ArticleContext.Consumer;

const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, ARTICLE_STATE);
  return (
    <ArticleContext.Provider value={{ state, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => useContext(ArticleContext);

export default ArticleProvider;
