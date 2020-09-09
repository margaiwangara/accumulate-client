import React, { useState, useEffect } from 'react';
import loading from '@/utils/app';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';
import { useHeader } from '@/context/app/HeaderContext';
import { setHeaderContent } from '@/context/actions/header';
import TitleComponent from '@/containers/DefaultLayout/TitleComponent';

const ArticleList = React.lazy(() =>
  import('@/components/Article/ArticleList'),
);

const INITIAL_STATE = {
  title: 'Welcome to Accumulate',
  description: 'Stay up to date with the latest news on web technologies, fast',
  poster: 'https://source.unsplash.com/1280x720/?computers,technology,code',
};

function Home() {
  const [limit, setLimit] = useState(10);
  const [content, setContent] = useState(INITIAL_STATE);
  const { dispatch, state } = useArticle();
  const { dispatch: errorDispatch } = useError();
  const { dispatch: headerDispatch } = useHeader();

  useEffect(() => {
    const data = {
      title: state.data.length > 0 ? state.data[0].title : content.title,
      description:
        state.data.length > 0 ? state.data[0].summary : content.description,
      poster: state.data.length > 0 ? state.data[0].image : content.poster,
    };

    headerDispatch(setHeaderContent(data));
  }, []);

  // setLimit(limit < state.count ? limit + 10 : state.count)
  return (
    <>
      <TitleComponent title="Home" />
      <React.Suspense fallback={loading()}>
        <ArticleList />
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#more">
            Older Posts &rarr;
          </a>
        </div>
      </React.Suspense>
    </>
  );
}

export default Home;
