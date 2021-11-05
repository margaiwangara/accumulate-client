import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/app/AuthContext';

function PublicRoute({ component: ComponentToRender, ...rest }) {
  const { state } = useAuth();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated ? (
          <Redirect to={from} />
        ) : (
          <ComponentToRender {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
