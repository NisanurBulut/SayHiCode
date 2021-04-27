import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LanguageIcon from '@material-ui/icons/Language';
import { CountryType } from "../types";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width:"50%"
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width:200, 
    alignItems:"end"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
interface CountryItemProps {
    countryItem: CountryType;
}
const CardItem: React.FC<CountryItemProps> = ({ countryItem }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {countryItem.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {countryItem.capital}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <LanguageIcon />
        {countryItem.languages
          .map((t, index) => 
            <React.Fragment key={index}>
              <span> {t.name}</span> &nbsp;
            </React.Fragment>
          )}
        </div>
      </div>
      <CardMedia
      
        className={classes.cover}
        image={countryItem.flag}
        title={countryItem.name}
      />
    </Card>
  );
};

export default CardItem;
