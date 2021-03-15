import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import  AuthRoute  from "./util/AuthRoute";
import { AuthProvider } from './context/auth';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookPost from './pages/BookPost';

function App() {
  return (
    <AuthProvider>
      <Router>
      <MenuBar />
        <Container>
          <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/bookposts/:postId" component={BookPost} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
