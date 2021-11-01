import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../app/pages/Homepage/Homepage';

export function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/lists">TaskList</Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
