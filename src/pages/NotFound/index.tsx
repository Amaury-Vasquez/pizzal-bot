import React from 'react';
import { useLocation } from 'react-router-dom';

import { Page } from '../../styles/elements';
import { Error404 } from '../../components/Error404';

export const NotFound = () => {
  const location = useLocation();
  return (
    <Page>
      <Error404 url={location.pathname} />
    </Page>
  );
};
