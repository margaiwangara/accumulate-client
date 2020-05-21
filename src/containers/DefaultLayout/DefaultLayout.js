import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import loading from '@/utils/app';
import routes from '@/routes';
import { pixelsToRem } from '@/utils/styles';

import 'simplebar/dist/simplebar.min.css';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));

function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <React.Suspense fallback={loading()}>
        <DefaultNavbar />
      </React.Suspense>
      <SimpleBar className="default-layout-body">
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
      </SimpleBar>
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.section`
  height: 100%;
  width: 100%;
  overflow: hidden;

  .default-layout-body {
    padding: ${pixelsToRem(30)} ${pixelsToRem(15)} ${pixelsToRem(30)}
      ${pixelsToRem(20)};
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default DefaultLayout;
