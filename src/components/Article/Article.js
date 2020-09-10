import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams, useHistory } from 'react-router-dom';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';
import { fetchArticle } from '@/context/actions/article';
import loading from '@/utils/app';

function Article() {
  const { link } = useParams();
  const history = useHistory();
  const { state, dispatch } = useArticle();
  const { dispatch: errorDispatch } = useError();

  useEffect(() => {
    if (!!Object.keys(state.article).length) {
    } else {
      // fetch from server
      fetchArticle(dispatch, errorDispatch, link)
        .then(() => console.log('Fetched Article'))
        .catch(() => {
          console.log('Not Fetched Article');
          history.push('/');
        });
    }
  }, []);
  return (
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <React.Suspense fallback={loading()}>
          <div>{ReactHtmlParser(state.article.content)}</div>
        </React.Suspense>
      </div>
    </div>
  );
}

export default Article;
