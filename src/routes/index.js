/* eslint-disable import/prefer-default-export */
import React from 'react';

const Routes = [
  {
    path: '/',
    component: React.lazy(() => import('../pages/Home')),
    exact: true,
  },{
    path: '/post/:id',
    component: React.lazy(() => import('../pages/Post')),
    exact: true,
  },{
    path: '/user/:id',
    component: React.lazy(() => import('../pages/User')),
    exact: true,
  },
];

export { Routes };
