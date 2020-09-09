import React from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import PropTypes from 'prop-types';
import authBg from '@/assets/images/new-bg.jpg';
import loading from '@/utils/app';

import '@/assets/css/bootstrap.min.css';
import '@/assets/css/now-ui-kit.min.css';

const AuthForm = React.lazy(() => import('@/components/Auth/AuthForm'));

function AuthContainer(props) {
  return (
    <AuthWrapper className="login-page">
      <SimpleBar
        className="scroller"
        style={{
          maxHeight: '100%',
        }}
      >
        <div className="page-header clear-filter" filter-color="orange">
          <div
            className="page-header-image"
            style={{
              backgroundImage: `url(${authBg})`,
            }}
          ></div>
          <div className="content">
            <div className="container">
              <div className="col-md-4 ml-auto mr-auto">
                <div className="card card-login card-plain">
                  <React.Suspense fallback={loading()}>
                    <AuthForm {...props} />
                  </React.Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </AuthWrapper>
  );
}

AuthContainer.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  path: PropTypes.string,
  btnText: PropTypes.string,
};

const AuthWrapper = styled.section`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default AuthContainer;
