import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  
  // necessary for content to be below app bar

  toolbar: theme.mixins.toolbar,

  //*************** Start Aside part ***********/

  drawerPaper: {
    width: drawerWidth,
    height:"100%",
    border: 0,
    // backgroundImage: "url(https://source.unsplash.com/user/erondu/1600x900)",
    backgroundRepeat: "no-repeat",
    background:'grey',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperToggle: {
    borderRadius: "7px",
    marginTop: "5rem",
    marginLeft: "1rem",
    border: 0,
    height: 400,
    width: "calc(100% - 2rem)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(7),
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    border: 0,
    paddingLeft: theme.spacing(2.5),
    padding: theme.spacing(0, 1),
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
    },
  },
  square: {
    marginLeft: theme.spacing(-1),
    marginTop: theme.spacing(0.5),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  //*************** End Aside part ***********/
  //*************** Start content part ***********/

  content: {
    overflow: "auto",
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `calc( 65px - ${drawerWidth}px)`,
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

  //*************** End Content part ***********/
}));
