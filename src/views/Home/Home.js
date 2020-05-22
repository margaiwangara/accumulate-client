import React from 'react';
import loading from '@/utils/app';
import styled from 'styled-components';
import { fetchArticles, fetchArticle } from '@/context/actions/article';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';

function Home() {
  const { dispatch } = useArticle();
  const { dispatch: errorDispatch } = useError();
  const link = 'useful-laravel-validation-rule-packages';

  return (
    <HomeContainer>
      <React.Suspense fallback={loading()}>
        <div className="row">
          <div className="col-md-2">
            <button
              className="btn btn-info"
              onClick={() => fetchArticles(dispatch, errorDispatch)}
            >
              Get All
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary"
              onClick={() => fetchArticle(dispatch, errorDispatch, link)}
            >
              Get Single
            </button>
          </div>
        </div>
      </React.Suspense>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;
export default Home;
