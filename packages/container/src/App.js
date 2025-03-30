import React from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const App = ({}) => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path='/auth' component={AuthApp}></Route>
            <Route path='/' component={MarketingApp}></Route>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
