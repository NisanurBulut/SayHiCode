import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/">
      <Dashboard></Dashboard>
      </Route>
      <Route>
      <Login />
      </Route>
      <Error />
    </Router>
  );
}

export default App;
