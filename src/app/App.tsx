import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/tasklist">TaskList</Route>
        <Route path="/">Homepage</Route>
      </Switch>
    </Router>
  );
}

export default App;
