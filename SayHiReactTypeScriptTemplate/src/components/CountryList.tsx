import React from 'react'
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
 function CountryList() {
    const { status, data, error, isFetching } = useQuery('todos', async () => {
        const { data } = await axios.get('https://restcountries.eu/rest/v2/all')
        console.log(data);
        return data;
      })
    return (
        <div>
            
        </div>
    )
}

export default CountryList;