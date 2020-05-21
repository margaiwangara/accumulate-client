import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import {
  setAuthorizationToken,
  getUserDetails,
  setCurrentUser,
} from '@/context/actions/auth';
import { useAuth } from '@/context/app/AuthContext';

// views
const Login = React.lazy(() => import('@/views/Pages/Login'));
const Register = React.lazy(() => import('@/views/Pages/Register'));
const DefaultLayout = React.lazy(() =>
  import('@/containers/DefaultLayout/DefaultLayout'),
);

// route wrappers
const PrivateRoute = React.lazy(() => import('@/components/Auth/PrivateRoute'));
const PublicRoute = React.lazy(() => import('@/components/Auth/PublicRoute'));

function Main() {
  const { dispatch } = useAuth();

  useEffect(() => {
    const authenticate = async () => {
      if (localStorage.jwt) {
        setAuthorizationToken(localStorage.jwt);
      }
      try {
        const user = await getUserDetails();

        dispatch(setCurrentUser(user));
      } catch (error) {
        dispatch(setCurrentUser({}));
      }
    };
    authenticate();
  }, []);

  return (
    <Switch>
      <PublicRoute
        path="/register"
        name="Register"
        exact
        component={Register}
      />
      <PublicRoute path="/login" name="Login" exact component={Login} />
      <PrivateRoute path="/" component={DefaultLayout} />
    </Switch>
  );
}

export default Main;
