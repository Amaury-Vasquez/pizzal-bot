import { useState } from 'react';

export const useInitialState = () => {
  const [isAuth, setAuth] = useState(false);
  return { isAuth, setAuth };
};
