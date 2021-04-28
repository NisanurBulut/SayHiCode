import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { CountryType } from "../types";
import Grid from "@material-ui/core/Grid";
import { CountryItem, Loading } from "../components";
import SearchTwoTone from "@material-ui/icons/SearchTwoTone";
import { IconButton, InputBase } from "@material-ui/core";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [error, setError] = useState<string>("");
  const [searchKey, setSearchKey] = useState<string>("");

  const getCountries = async () => {
    setLoading(true);
    let url="https://restcountries.eu/rest/v2/all";
    if(searchKey.length>0){
      url=`https://restcountries.eu/rest/v2/name/${searchKey}`;
    }
    const countries = await axios.get<CountryType[]>(
      url
    ).then((result)=>{
      setCountries(result.data);
    }).catch((err)=>{
      setError(err);
      setCountries([]);
    }).finally(()=>setLoading(false));
    return countries;
  };

  useEffect(()=>{
    getCountries();
  },[searchKey])

  return (
    <div className={classes.root}>
      <Paper className={classes.searchPaper}>
        <InputBase
          placeholder="Search country"
          className={classes.searchInput}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
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
