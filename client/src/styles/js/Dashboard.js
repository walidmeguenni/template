import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
root:{  display: "flex",},
  toolbar: theme.mixins.toolbar,
  card: {
    minWidth: "40px",
    height: 100,
  },
  content: {
    overflow: "auto",
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
   marginLeft: `calc( 65px - ${drawerWidth}px)`,
   //  marginLeft: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: `calc( 55px - ${drawerWidth}px)`,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  container:{
      display:"flex",
      justifyContent:"center",
      marginTop:theme.spacing(3)
  },
}));
