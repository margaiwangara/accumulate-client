import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import loading from '@/utils/app';
import routes from '@/routes';

// const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));

function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      {/* <React.Suspense fallback={loading()}>
        <p>Navbar was here</p>
      </React.Suspense> */}
      <SimpleBar style={{ maxHeight: '100%' }}>
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
            </Switch>
          </React.Suspense>
        </div>
      </SimpleBar>
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.section`
  height: 100%;
  width: 100%;
  overflow: hidden;

  .default-layout-body {
    max-height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default DefaultLayout;
