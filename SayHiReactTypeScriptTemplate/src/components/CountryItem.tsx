import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import Typography from "@material-ui/core/Typography";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import {purple, green, deepOrange} from '@material-ui/core/colors';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import PeopleTwoToneIcon from "@material-ui/icons/PeopleTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import { CountryType } from "../types";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "200px",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(15),
    marginRight: 0,
  },
}));

interface CountryItemProps {
  countryItem: CountryType;
}
const CountryItem: React.FC<CountryItemProps> = ({ countryItem }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={countryItem.flag}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {countryItem.name}
        </Typography>
        <div className="content">
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
            <Tooltip placement="top-start" title="Region">
              <ListItem>
                <ListItemIcon>
                  <LocationOnTwoToneIcon fontSize="large" color="error"/>
                </ListItemIcon>
                <ListItemText primary={countryItem.region} />
              </ListItem>
              </Tooltip>
              <Tooltip placement="top-start" title="Subregion">
              <ListItem>
                <ListItemIcon>
                  <MapTwoToneIcon fontSize="large" style={{ color: purple[800] }}/>
                </ListItemIcon>
                <ListItemText primary={countryItem.subregion} />
              </ListItem>
              </Tooltip>
              <Tooltip placement="top-start" title="Currency Code" >
              <ListItem>
                <ListItemIcon>
                  <MonetizationOnTwoToneIcon fontSize="large" style={{ color: green[800] }}/>
                </ListItemIcon>
                <ListItemText primary={countryItem.currencies[0].code} />
              </ListItem>
              </Tooltip>
           
            </Grid>
            <Grid item xs={6} md={6}>
            <Tooltip placement="top-start" title="NativeName">
            <ListItem>
                <ListItemIcon>
                  <PublicTwoToneIcon fontSize="large"  color="primary"/>
                </ListItemIcon>
                <ListItemText primary={countryItem.nativeName} />
              </ListItem>
              </Tooltip>
              <Tooltip placement="top-start" title="Capital">
              <ListItem>
                <ListItemIcon>
                  <LocationCityTwoToneIcon color="secondary" fontSize="large"/>
                </ListItemIcon>
                <ListItemText primary={countryItem.capital} />
              </ListItem>
              </Tooltip>
              <Tooltip placement="top-start" title="Population">
              <ListItem>
                <ListItemIcon>
                  <PeopleTwoToneIcon fontSize="large" style={{ color: deepOrange[500] }}/>
                </ListItemIcon>
                <ListItemText primary={countryItem.population} />
              </ListItem>
              </Tooltip>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryItem;
