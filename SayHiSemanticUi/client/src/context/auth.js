import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';


const initialState = {
  localUser: null,
};
console.log(localStorage.getItem('jwtToken'));
if (localStorage.getItem('jwtToken')) {
  const decodedToken = {...jwtDecode(localStorage.getItem('jwtToken'))};
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.localUser = {...decodedToken};
  }
}
const AuthContext = createContext({
  localUser: null,
  login: (userData) => {},
  logout: () => {},
});
console.log(initialState);
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        localUser: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        localUser: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, { localUser: initialState });
  function login(userData) {
    localStorage.setItem('jwtToken', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }

  function logout() {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: 'LOGOUT',
    });
  }

  return (
    <AuthContext.Provider
      value={{ localUser: state.localUser, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
