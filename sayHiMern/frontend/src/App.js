import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import EventsPage from './pages/EventsPage/EventsPage';
import BookingsPage from './pages/BookingsPage/BookingsPage';
import MainNavigation from './components/Navigation/MainNavigation';
import './App.css';
import AuthContext from './context/auth-context';

class App extends Component {
  state = {
    token: null,
    userId: null,
  };
  login = (token, userId, tokenExpiration) => {
    this.setState({
      token: token,
      userId: userId,
    });
  };
  logout = () => {
    this.setState({
      token: null,
      userId: null,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout,
            }}
          >
            <MainNavigation />
            <main className="mainContent">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                  )}
                {this.state.token && (
                  <Route path="/events" component={EventsPage} />
                  )}
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                  )}
                  {!this.state.token && <Redirect from="/" to="/auth" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
