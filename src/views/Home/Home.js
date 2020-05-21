import React from 'react';
import loading from '@/utils/app';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <React.Suspense fallback={loading()}>
        <p>I was here</p>
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
  border: solid 1px green;
`;
export default Home;
