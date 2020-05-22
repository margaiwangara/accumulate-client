import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUserCircle,
  faLock,
  faUser,
  faAt,
} from '@fortawesome/free-solid-svg-icons';
import loading from './utils/app';

// css
import './App.css';

// font awesome
library.add(fab, faUserCircle, faLock, faUser, faAt);

// store
const ContextStore = React.lazy(() => import('./context/store'));

// main container
const Main = React.lazy(() => import('@/containers/Main/Main'));

function App() {
  useEffect(() => {
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    return function cleanup() {
      document.body.classList.remove('landing-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  return (
    <HashRouter>
      <AppContainer id="app">
        <React.Suspense fallback={loading()}>
          <ContextStore>
            <Main />
          </ContextStore>
        </React.Suspense>
      </AppContainer>
    </HashRouter>
  );
}

const AppContainer = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
export default App;
