import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import App from '../../App';

import AppContext from '../../Context/index';

export const ProtectedRoute = (props: RouteProps) => {
  const { path, component } = props;
  const { isDeviceAuth } = useContext(AppContext);
  return isDeviceAuth ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};
