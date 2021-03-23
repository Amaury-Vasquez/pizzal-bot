import { useEffect, useState } from 'react';

export const useInitialState = () => {
  const url = 'http://localhost:1337';
  const [isDeviceAuth, setDeviceAuth] = useState(false);
  const [isUserAuth, setUserAuth] = useState(false);
  const [token, setToken] = useState<{ jwt: string }>();

  useEffect(() => {
    const authDevice = async () => {
      try {
        const request = await fetch(`${url}/auth/device`, {
          method: 'POST',
          mode: 'cors',
          cache: 'default',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({
            password: 'this-is-master-password',
            deviceName: 'loquequieras',
          }),
        });
        const response = await request.json();
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    if (!isDeviceAuth) {
      authDevice();
      setDeviceAuth(true);
    }
  }, []);
  const authUser = async (
    data: {} = { username: 'ipi', password: '1202' },
    type: string,
  ) => {
    try {
      const request = await fetch(`${url}/auth/${type}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      const response = await request.json();
      setToken(response);
      setUserAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  const userLogout = () => {
    setUserAuth(false);
    setToken(undefined);
  };
  return {
    token,
    url,
    isUserAuth,
    authUser,
    isDeviceAuth,
    userLogout,
  };
};
