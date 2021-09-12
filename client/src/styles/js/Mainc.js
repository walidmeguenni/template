import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    marginTop: "200px",
  },
  mainText: {
    fontWeight: 700,
    lineHeight: 1.5,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    [theme.breakpoints.between("sm","md")]: {
      fontSize: "20px",
      lineHeight: 1.5,
    },
  },
  pos: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.only("sm")]: {
    marginTop: theme.spacing(1),
    },
  },
  buttonHeader: {
    color: "#00b0ff",
    border: "2px solid #00b0ff",
    "&:hover": {
      color: "white",
      backgroundColor: "#00b0ff",
    },
  },
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
    marginTop: "160px",
    width: "100%",
    height: " auto",
  },
}));
