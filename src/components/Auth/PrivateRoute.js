import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '@/context/app/AuthContext';

function PrivateRoute({ component: ComponentToRender, ...rest }) {
  const { state } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated ? (
          <ComponentToRender {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
