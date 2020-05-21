import React from 'react';
import styled from 'styled-components';

import loading from '@/utils/app';
import { fontSize, pixelsToRem } from '@/utils/styles';

const ArticleListItem = React.lazy(() => import('./ArticleListItem'));

function ArticleList() {
  return (
    <ArticleListContainer>
      <h3 data-title="Bookmarked">Bookmarked</h3>
      <div className="article-list">
        <React.Suspense fallback={loading()}>
          <ArticleListItem scale="left" />
          <ArticleListItem scale="right-top" />
          <ArticleListItem scale="right-bottom" />
        </React.Suspense>
      </div>
    </ArticleListContainer>
  );
}

const ArticleListContainer = styled.section`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;

  h3 {
    ${fontSize(22.5)}
    margin-bottom: ${pixelsToRem(15)};
    font-weight: 600;
    position: relative;
    color: var(--primaryColor);
    &::after {
      content: attr(data-title);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      opacity: 0.25;
      top: 0;
      left: 0;
      padding-left: ${pixelsToRem(10)};
      transform: scale(1.05);
      display: none;
    }
  }

  .article-list {
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${pixelsToRem(10)};
    grid-auto-rows: ${pixelsToRem(200)} ${pixelsToRem(200)};
    grid-template-areas: 'left left right-top'
                         'left left right-bottom';
    
    .left {
      grid-area: left;
    }

    .right-top {
      grid-area: right-top;
    }

    .right-bottom {
      grid-area: right-bottom;
    }
    
  }
`;
export default ArticleList;
