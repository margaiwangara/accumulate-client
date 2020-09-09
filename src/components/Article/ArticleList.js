import React, { useEffect } from 'react';
import { fetchArticles } from '@/context/actions/article';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';
import loading from '@/utils/app';

const ArticleListItem = React.lazy(() => import('./ArticleListItem'));

function ArticleList() {
  const { dispatch, state } = useArticle();
  const { dispatch: errorDispatch } = useError();

  useEffect(() => {
    fetchArticles(dispatch, errorDispatch)
      .then(() => console.log('Fetched Articles'))
      .catch(() => console.log('Failed to fetch articles'));
  }, []);

  const articles = state.data.map((value, index) => (
    <ArticleListItem
      title={value.title}
      description={value.summary}
      date={value.datePublished}
      author={value.authors[0]}
      link={value.link}
      poster={value.image}
      key={value._id}
      id={value._id}
      content={value.content}
      language={value.language}
    />
  ));
  return (
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <React.Suspense fallback={loading()}>{articles}</React.Suspense>
      </div>
    </div>
  );
}

export default ArticleList;
