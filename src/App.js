import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import loading from './utils/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUserCircle,
  faLock,
  faUser,
  faAt,
} from '@fortawesome/free-solid-svg-icons';

// css
import './App.css';

// font awesome
library.add(fab, faUserCircle, faLock, faUser, faAt);

// views
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const DefaultLayout = React.lazy(() =>
  import('./containers/DefaultLayout/DefaultLayout'),
);

// store
const ContextStore = React.lazy(() => import('./context/store'));

function App() {
  return (
    <HashRouter>
      <AppContainer id="app">
        <React.Suspense fallback={loading()}>
          <ContextStore>
            <Switch>
              <Route
                path="/register"
                name="Register"
                exact
                render={(props) => <Register {...props} />}
              />
              <Route
                path="/login"
                name="Login"
                exact
                render={(props) => <Login {...props} />}
              />
              <Route
                path="/"
                render={(props) => <DefaultLayout {...props} />}
              />
            </Switch>
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
