import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import {CountryList} from './components';
import Container from '@material-ui/core/Container';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
           <Container maxWidth="lg">
           <CountryList />
           </Container>
        </QueryClientProvider>
    )
}
export default App;