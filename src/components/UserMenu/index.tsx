import React, { useContext } from 'react';

import { Button, Menu } from './styles';
import Context from '../../Context/index';

export const UserMenu = () => {
  const { isUserAuth } = useContext(Context);
  return (
    <Menu>
      <Button
        onClick={() => {
          if (isUserAuth) {
            console.log('Logging out');
          } else {
            console.log('Logging in');
          }
        }}
      >
        {isUserAuth ? 'logout' : 'login'}
      </Button>
    </Menu>
  );
};
