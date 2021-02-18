import { createContext } from 'react';

import { ContextValues } from '../interfaces';

const AppContext = createContext<ContextValues>({});

export default AppContext;
