import React from 'react';
import loading from '@/utils/app';

const AuthContainer = React.lazy(() =>
  import('@/containers/Auth/AuthContainer'),
);

function Login() {
  return (
    <React.Suspense fallback={loading()}>
      <AuthContainer
        heading="Access Account"
        subheading="Log in to access your account"
        path="login"
        btnText="Log In"
      />
    </React.Suspense>
  );
}

export default Login;
