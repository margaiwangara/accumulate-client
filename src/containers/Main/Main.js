import React, { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import {
  setAuthorizationToken,
  getUserDetails,
  setCurrentUser,
  removeCurrentUser,
} from '@/context/actions/auth';
import { useAuth } from '@/context/app/AuthContext';

// views
const Login = React.lazy(() => import('@/views/Pages/Login'));
const Register = React.lazy(() => import('@/views/Pages/Register'));
const TwoFactor = React.lazy(() => import('@/views/Auth/TwoFactor'));
const ResetPassword = React.lazy(() => import('@/views/Auth/ResetPassword'));
const EmailConfirmation = React.lazy(() =>
  import('@/views/Auth/EmailConfirmation'),
);
const DefaultLayout = React.lazy(() =>
  import('@/containers/DefaultLayout/DefaultLayout'),
);

// route wrappers
const PrivateRoute = React.lazy(() => import('@/components/Auth/PrivateRoute'));
const PublicRoute = React.lazy(() => import('@/components/Auth/PublicRoute'));

function Main() {
  const { dispatch } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const authToken = window.localStorage.getItem('jwt');
    if (authToken) {
      setAuthorizationToken(authToken);
      getUserDetails()
        .then(
          ({
            email,
            name,
            surname,
            createdAt,
            profileImage,
            twoFactorCode,
            twoFactorCodeExpire,
            recoveryEmail,
            twoFactorEnable,
          }) => {
            const userDetails = {
              email,
              name,
              surname,
              createdAt,
              profileImage,
              twoFactorCode,
              twoFactorCodeExpire,
              recoveryEmail,
              twoFactorEnable,
            };
            dispatch(setCurrentUser(userDetails));
          },
        )
        .catch(() => dispatch(removeCurrentUser()));
    } else {
      dispatch(removeCurrentUser());
      history.push('/login');
    }
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
      <PublicRoute
        exact
        path="/reset-password"
        name="Reset Password"
        component={ResetPassword}
      />
      <PublicRoute
        exact
        path="/two-factor"
        name="Two Factor"
        component={TwoFactor}
      />
      <PublicRoute
        exact
        path="/confirmemail"
        name="Confirm Email"
        component={EmailConfirmation}
      />
      <PrivateRoute path="/" component={DefaultLayout} />
    </Switch>
  );
}

export default Main;
