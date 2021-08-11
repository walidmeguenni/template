import React from "react";
import {  Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  title: {
    fontSize: 20,
    fontFamily: "Fira Code, monospace",
  },
}));
const Cardvalue = ({value}) => {
  const classes = useStyles();
  return (
    <Typography className={classes.title} color="primary" gutterBottom>
      {value}
    </Typography>
  );
};

export default Cardvalue;
