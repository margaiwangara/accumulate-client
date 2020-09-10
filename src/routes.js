import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));
// const Articles = React.lazy(() => import('@/views/Article/Articles'));
const Article = React.lazy(() => import('@/views/Article/Article'));
const Profile = React.lazy(() => import('@/views/Profile/Profile'));
const ChangePassword = React.lazy(() =>
  import('@/views/Profile/ChangePassword'),
);
const About = React.lazy(() => import('@/views/About/About'));
const Contact = React.lazy(() => import('@/views/Contact/Contact'));

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
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    exact: true,
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    exact: true,
    path: '/:link',
    name: 'Article',
    component: Article,
  },
];

export default routes;
