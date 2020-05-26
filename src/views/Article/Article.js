import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';
import { fetchArticle } from '@/context/actions/article';

function Article() {
  const { link } = useParams();
  const { state, dispatch } = useArticle();
  const { state: errorState, dispatch: errorDispatch } = useError();

  useEffect(() => {
    async function getArticle() {
      try {
        await fetchArticle(dispatch, errorDispatch, link);
        console.log(state);
      } catch (error) {
        console.log(errorState);
        // console.log(error);
      }
    }
    getArticle();
  }, []);
  return (
    <div className="pt-5">
      <p>Link: {link}</p>
    </div>
  );
}

export default Article;
