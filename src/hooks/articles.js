import { useEffect } from 'react';
import { fetchArticles } from '@/context/actions/article';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';

function useArticles(page = 1) {
  const { dispatch } = useArticle();
  const { dispatch: errorDispatch } = useError();

  useEffect(() => {
    fetchArticles(dispatch, errorDispatch);
  }, []);
}

export default useArticles;
