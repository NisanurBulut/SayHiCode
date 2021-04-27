import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { CountryType } from "../types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const getCountries = async () => {
  const countries = await axios.get<CountryType[]>(
    "https://restcountries.eu/rest/v2/all"
  );
  return countries;
};
function CountryList() {
  const classes = useStyles();
  const { status, data, error, isFetching } = useQuery(
    "countries",
    getCountries
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {data?.data.map((item) => {
          return (
            <Grid item md={4}>
              <CardItem key={item.name} countryItem={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default CountryList;
