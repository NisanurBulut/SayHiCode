import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import EventsPage from './pages/EventsPage';
import BookingsPage from './pages/BookingsPage';
import MainNavigation from './components/Navigation/MainNavigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
    <MainNavigation />
     <main className="mainContent">
     <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/bookings" component={BookingsPage} />
      </Switch>
     </main>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
