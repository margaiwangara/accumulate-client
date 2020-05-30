import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useArticle } from '@/context/app/ArticleContext';
import { useError } from '@/context/app/ErrorContext';
import { fetchArticle } from '@/context/actions/article';
import loading from '@/utils/app';

function Article() {
  const { link } = useParams();
  const { state, dispatch } = useArticle();
  const { state: errorState, dispatch: errorDispatch } = useError();

  useEffect(() => {
    async function getArticle() {
      try {
        await fetchArticle(dispatch, errorDispatch, link);
      } catch (error) {
        console.log(error);
      }
    }
    getArticle();
  }, []);

  return (
    <div className="pt-5">
      <React.Suspense fallback={loading()}>
        <img
          src={state.article.image}
          alt="article-poster"
          className="img-responsive rounded"
        />
        <h4 className="title">{state.article.title}</h4>
        <p className="description">{state.article.summary}</p>
        <ArticleBody>{ReactHtmlParser(state.article.content)}</ArticleBody>
      </React.Suspense>
    </div>
  );
}

const ArticleBody = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;

  ul {
    list-style-type: none;
    line-height: 2;
    padding-left: 1.5rem;
    margin-bottom: 1.875rem;
  }

  pre {
    line-height: 1.6em;
    display: block;
    border-radius: 0.125rem;
    border-width: 2px;
    border-color: #e8e8e8;
    margin-bottom: 1.875rem;
    overflow: auto;
    background-color: #e8e8e8;
    padding: 1.25rem;
  }
`;

export default Article;
