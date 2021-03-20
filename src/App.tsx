import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from './Context';
import { Home } from './pages/Home';
import { UserAuth } from './pages/UserAuth';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { GlobalStyles } from './styles/GlobalStyles';
import { useInitialState } from './hooks/useInitialState';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={UserAuth} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
