import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const App = ({}) => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/auth' component={AuthLazy}></Route>
              <Route path='/' component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
