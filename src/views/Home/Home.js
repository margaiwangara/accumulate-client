import React from 'react';
import loading from '@/utils/app';
import styled from 'styled-components';

const ArticleList = React.lazy(() =>
  import('@/components/Article/ArticleList'),
);

function Home() {
  return (
    <HomeContainer>
      <React.Suspense fallback={loading()}>
        <ArticleList />
      </React.Suspense>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;
export default Home;
