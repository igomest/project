import * as React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import UserLayout from '../Layout/UserLayout';
import AppLayout from '../Layout/AppLayout';

import { appRouters, userRouter } from './router.config';
import { isGranted } from '../../lib/abpUtility';
import Exception from '../../scenes/Exception';
import HomeRoute from './HomeRoute';
import NotFoundRoute from './NotFoundRoute';
import { Loader } from '@mantine/core';
declare var abp: any;

const Router = ({ paths, ...rest }: any) => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundRoute />} />
      <Route element={<UserLayout />}>
        {userRouter.map((route: any) => (
          <Route
            key={route.path}
            path={route.path}
            {...rest}
            element={<React.Suspense fallback={<Loader />}>{route.component}</React.Suspense>}
          />
        ))}
      </Route>
      <Route element={<AppLayout {...rest} />}>
        <Route path={'/'} element={<HomeRoute />} index />
        {appRouters.map((route: any) => (
          <Route
            key={route.name}
            path={route.path}
            {...rest}
            element={
              route.permission && !isGranted(route.permission) ? (
                <Navigate to="/exception?type=401" replace={true} />
              ) : (
                <React.Suspense fallback={<Loader />}>
                   {route.component}
                </React.Suspense>
              )
            }
          />
        ))}
        <Route path={'/exception'} element={<Exception />} />
      </Route>
    </Routes>
  );
};

export default Router;
