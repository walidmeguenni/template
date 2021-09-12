import React from "react";
import { useHistory } from "react-router-dom";
import welcome from "../assets/images/Group 19.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  button1: {
    color: "white",
    backgroundColor: "#00b0ff",
    border: "2px solid #00b0ff",
    "&:hover": {
      color: "#00b0ff",
      border: "2px solid #00b0ff",
      backgroundColor: "white",
    },
  },
  imagesize: {
    marginTop: "40px",
    marginBottom: "20px",
    width: "100%",
    height: " auto",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Box align="center">
        {/* <Typography variant="h4" className={classes.title}>
          404 Page not found
        </Typography> */}
        <img src={welcome} alt="" className={classes.imagesize} />
        <Button onClick={() => history.goBack()} className={classes.button1}>
          Go Back
        </Button>
      </Box>
    </div>
  );
};

export { NotFound };
