import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loading from './utils/app';

// css
import './App.css';

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
      <main id="app">
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
      </main>
    </HashRouter>
  );
}

export default App;
