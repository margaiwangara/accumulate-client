import React from 'react';
import loading from '@/utils/app';
import styled from 'styled-components';
import { Button } from 'reactstrap';

function Home() {
  return (
    <HomeContainer>
      <React.Suspense fallback={loading()}>
        <Button color="primary">I was here</Button>
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
