import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import AppContext from './Context';
import { useInitialState } from './hooks/useInitialState';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserAuth } from './pages/UserAuth';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={UserAuth} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
