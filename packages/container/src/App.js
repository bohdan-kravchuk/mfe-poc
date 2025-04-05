import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import Progress from './components/Progress';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { createBrowserHistory } from 'history';

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

const App = ({}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <DashboardLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/' component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
