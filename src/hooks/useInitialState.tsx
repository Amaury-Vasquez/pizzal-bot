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
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({
            password: 'this-is-master-password',
            deviceName: 'loquequieras',
          }), // body data type must match "Content-Type" header
        });
        const response = await request.json();
        console.log(response);
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
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data),
      });
      const response = await request.json();
      setToken(response);
      setUserAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return { token, url, isUserAuth, authUser, isDeviceAuth, setDeviceAuth };
};
