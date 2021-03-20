import React, { Fragment } from 'react';

import { Header } from '../Header';
export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};
