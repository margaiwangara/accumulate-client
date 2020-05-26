import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import loading from '@/utils/app';
import routes from '@/routes';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));

function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <React.Suspense fallback={loading()}>
        <DefaultNavbar />
      </React.Suspense>
      <SimpleBar style={{ maxHeight: '100%', paddingTop: '40px' }}>
        <div className="container">
          <React.Suspense fallback={loading()}>
            <Switch>
              {routes.map((route, index) =>
                route.component ? (
                  <Route
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    key={index}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null,
              )}
              <Redirect from="/user" to="/user/profile" />
            </Switch>
          </React.Suspense>
        </div>
        <footer className="py-4 px-2 bg-light text-sm">
          &copy; {new Date().getFullYear()} accumulate
        </footer>
      </SimpleBar>
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.section`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default DefaultLayout;
