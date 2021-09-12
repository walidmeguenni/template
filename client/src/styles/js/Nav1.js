import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },
  toolbarTitle: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#65617D",
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: 1.5,
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    marginLeft: " 0.1em",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: "1em",
    fontWeight: 550,
    fontFamily: "Arial, Helvetica, sans-serif",
    marginLeft: "5px",
    color: "#535461",
    "&:hover": {
      backgroundColor: "#CCEFFF",
      borderRadius: 5,
    },
  },
  toolbarLinkActive: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: "1em",
    fontWeight: 550,
    backgroundColor: "#00b0ff",
    color: "White",
    borderRadius: 5,
    marginLeft: "5px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  buttonHeader: {
    color: "#00b0ff",
    border: "2px solid #00b0ff",
    "&:hover": {
      color: "white",
      backgroundColor: "#00b0ff",
    },
  },
  links:{
    paddingLeft: 200,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 150,
    },
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
  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  show: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
