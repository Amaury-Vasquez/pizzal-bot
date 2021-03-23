import Swal from 'sweetalert2';
import { useContext } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

import { Button, Menu } from './styles';
import Context from '../../Context/index';
import { useHistory } from 'react-router';

export const UserMenu = (props: { callback: Function }) => {
  const { isUserAuth, userLogout } = useContext(Context);
  const history = useHistory();
  return (
    <Menu>
      <Button
        onClick={() => {
          if (isUserAuth) {
            Swal.fire({
              title: 'Are you sure you want to logout?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: 'var(--red)',
              cancelButtonColor: 'var(--blue)',
              confirmButtonText: 'Logout!',
            }).then((result) => {
              if (result.isConfirmed) {
                if (userLogout) userLogout();
                history.push('/login');
              }
              props.callback();
            });
          } else history.push('/login');
        }}
      >
        {isUserAuth ? (
          <span>
            {'logout '}
            <FiLogOut />
          </span>
        ) : (
          <span>
            {'login '}
            <FiLogIn />
          </span>
        )}
      </Button>
    </Menu>
  );
};
