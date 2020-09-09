import React from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import PropTypes from 'prop-types';
import loading from '@/utils/app';

const AuthForm = React.lazy(() => import('@/components/Auth/AuthForm'));

function AuthContainer(props) {
  return (
    <AuthWrapper>
      <SimpleBar
        className="scroller"
        style={{
          maxHeight: '100%',
        }}
      >
        <div className="row" style={{ margin: '10vh 0' }}>
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <React.Suspense fallback={loading()}>
                <AuthForm {...props} />
              </React.Suspense>
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
