import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));
const Articles = React.lazy(() => import('@/views/Article/Article'));

const routes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    exact: true,
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
];

export default routes;
