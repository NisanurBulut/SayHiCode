import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, PageNotFound } from './pages';

// TODO:

// Add some new pieces of data like achievements etc

// Fix crashing error when you search for developed (is it when a username partially matches?)

// Fix the styling so you can see the error messages

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
