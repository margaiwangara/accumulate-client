import React from 'react';

import loading from '@/utils/app';

const AuthContainer = React.lazy(() =>
  import('@/containers/Auth/AuthContainer'),
);

function Register() {
  return (
    <React.Suspense fallback={loading()}>
      <AuthContainer
        heading="Create Account"
        subheading="Register to bookmark articles and so much more..."
        path="register"
        btnText="Register"
      />
    </React.Suspense>
  );
}

export default Register;
