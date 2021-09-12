import React,{useState} from "react";
import { Link, Button, Box, Typography } from "@material-ui/core";
import welcome from "../assets/images/undraw_welcome_cats_thqn.svg";
import { makeStyles } from "@material-ui/core/styles";
import { verifyUser } from "../services/api/apiAuth";
const useStyles = makeStyles((theme) => ({
 title:{
     marginTop:theme.spacing(8),
     color: "#00b0ff",
 },
    button1: {
    color: "white",
    backgroundColor: "#00b0ff",
    "&:hover": {
      color: "#00b0ff",
      border: "2px solid #00b0ff",
      backgroundColor: "white",
    },
  },
  imagesize: {
    marginTop: "60px",
    width: "100%",
    height: " auto",
  },
}));
const Welcome = (props) => {
    const [one, setone] = useState(true)
  if (one&&props.match.path === "/users/confirm/:token") {
    verifyUser(props.match.params.token);
    setone(false)
  }
  const classes = useStyles();
  return (
    <div className="container">
      <Box align="center"> 
          <Typography variant="h4" className={classes.title} >welcome, your account is ready</Typography>
      <img src={welcome} alt="" className={classes.imagesize} />
     
        <Link
          component={Button}
          underline="none"
          variant="contained"
          className={classes.button1}
          href="/auth"
        >
          Login
        </Link>
      </Box>
    </div>
  );
};

export { Welcome };
