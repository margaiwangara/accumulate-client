import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));
const Articles = React.lazy(() => import('@/views/Article/Article'));
const Profile = React.lazy(() => import('@/views/Profile/Profile'));
const ChangePassword = React.lazy(() =>
  import('@/views/Profile/ChangePassword'),
);

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
  {
    exact: true,
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    exact: true,
    path: '/user/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
  },
];

export default routes;
