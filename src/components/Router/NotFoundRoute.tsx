import React from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundRoute = () => {
  return <Navigate to={'/exception?type=404'} />;
};

export default NotFoundRoute;
