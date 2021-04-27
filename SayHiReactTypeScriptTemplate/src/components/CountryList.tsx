import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { CountryType } from "../types";
import Grid from "@material-ui/core/Grid";
import { CountryItem, Loading } from "../components";
import SearchTwoTone from "@material-ui/icons/SearchTwoTone";
import {
  IconButton,
  InputBase
} from "@material-ui/core";
import { Paper, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  searchInput: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


function CountryList() {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = async () => {
    const countries = await axios.get<CountryType[]>(
      "https://restcountries.eu/rest/v2/all"
    );
    setCountries(countries?.data);
    setLoading(false);
    return countries;
  };

   const { error } = useQuery(
    "countries",
    getCountries
  );

  return (
    <div className={classes.root}>
        <Paper className={classes.searchPaper}>
        <InputBase
          placeholder="Search countries"
          className={classes.searchInput}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <IconButton>
          <SearchTwoTone />
        </IconButton>
      </Paper>
        <Loading isLoading={loading}>
      <Grid container spacing={4}>
          {countries.map((item) => {
            return (
              <Grid key={item.name} item md={4}>
                <CountryItem countryItem={item} />
              </Grid>
            );
          })}
      </Grid>
        </Loading>
    </div>
  );
}

export default CountryList;
