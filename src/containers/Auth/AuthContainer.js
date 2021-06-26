import React from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import PropTypes from 'prop-types';
import loading from '@/utils/app';

const AuthForm = React.lazy(() => import('@/components/Auth/AuthForm'));

function AuthContainer(props) {
  return (
    <AuthWrapper>
      <section className="d-flex align-items-center justify-content-center px-2 auth-wrapper-inner">
        <div className="card">
          <React.Suspense fallback={loading()}>
            <AuthForm {...props} />
          </React.Suspense>
        </div>
      </section>
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
  overflow-x: hidden;
  overflow-y: auto;

  .auth-wrapper-inner {
    height: 100%;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    .card {
      width: 400px;
    }
  }
`;

export default AuthContainer;
