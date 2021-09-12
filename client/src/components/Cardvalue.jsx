import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  title: {
    color:"#00A3FE"
  },
}));
const Cardvalue = ({ value ,}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.title}  gutterBottom noWrap>
        {value}
      </Typography>
      
    </>
  );
};

export default Cardvalue;
