import React, { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      marginLeft: "50%",
      marginRight: "50%",
      marginTop: "50%",
    },
  })
);

interface ILoadingProps {
  isLoading: boolean;
}
const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const classes = useStyles();
  const { isLoading } = props;
  console.log(isLoading, new Date());
  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress color="primary" />
      </div>
    );
  } else {
    return <>{props.children}</>;
  }
};

export default Loading;
