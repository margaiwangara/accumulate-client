import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loading from './utils/app';

import './App.css';

// views
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Home = React.lazy(() => import('./views/Home/Home'));

function App() {
  return (
    <HashRouter>
      <main id="app">
        <React.Suspense fallback={loading()}>
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
            <Route path="/" exact render={(props) => <Home {...props} />} />
          </Switch>
        </React.Suspense>
      </main>
    </HashRouter>
  );
}

export default App;
