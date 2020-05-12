import React from 'react';
import loading from '@/utils/app';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));

function DefaultLayout() {
  return (
    <section>
      <React.Suspense fallback={loading()}>
        <DefaultNavbar />
      </React.Suspense>
    </section>
  );
}

export default DefaultLayout;
