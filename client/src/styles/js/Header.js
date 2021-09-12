import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  //******************* Start Header part **************/
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("sm")]: {
      height: "58px",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  appBarShift: {
    [theme.breakpoints.up("sm")]: {
      height: "58px",
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  toolSpace: {
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
  },
  toolSpaceToggle: {
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(-2),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  fix: {
    paddingTop: 8,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  fixToggle: {
    paddingTop: 8,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(-1.5),
    marginTop: theme.spacing(0.5),

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton_: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  sectionDesktop: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  //*************** End Header part***********/
}));
