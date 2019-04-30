import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../screens';

const AppRouter = () => (
  <Switch>
    <Route exact={true} path="/" component={() => <Home />} />
  </Switch>
)

export { AppRouter };
