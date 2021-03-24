import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#af52bf',
      main: '#6d1b7b',
      dark: '#6d1b7b',
      contrastText: '#fff',
    }
  },
});
const client = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
     <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
    </ThemeProvider>,
  document.getElementById('root')
);