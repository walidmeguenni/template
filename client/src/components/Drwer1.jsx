import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotesIcon from '@material-ui/icons/Notes';
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  show: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const data = [
    { title: "Home", icon: <HomeIcon/> },
    { title: "About", icon: <InfoIcon/>},
    { title: "Features", icon: <FeaturedPlayListIcon/> },
    { title: "Pricing", icon: <MonetizationOnIcon/>},
    { title: "Testimonaila", icon: <NotesIcon/> },
  ];

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       { data.map( (text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.toolbar}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            color="inherit"
            aria-label="Open Darwer"
            edge="start"
            onClick={toggleDrawer(anchor, true)}
            className={classes.show}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
