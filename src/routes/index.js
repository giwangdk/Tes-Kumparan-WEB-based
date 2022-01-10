/* eslint-disable import/prefer-default-export */
import React from 'react';

const Routes = [
  {
    path: '/',
    component: React.lazy(() => import('../pages/Home')),
    exact: true,
  },
];

export { Routes };
