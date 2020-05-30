import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));
// const Articles = React.lazy(() => import('@/views/Article/Articles'));
const Article = React.lazy(() => import('@/views/Article/Article'));
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
  {
    exact: true,
    path: '/:link',
    name: 'Article',
    component: Article,
  },
];

export default routes;
