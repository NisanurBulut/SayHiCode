import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { CountryType } from "../types";


const getCountries = async () => {
    const countries = await axios.get<CountryType[]>("https://restcountries.eu/rest/v2/all");
    return countries;
  };
function CountryList() {
  const { status, data, error, isFetching } = useQuery('countries',getCountries);
  console.log(status, data, error, isFetching);
  return <div></div>;
}

export default CountryList;
