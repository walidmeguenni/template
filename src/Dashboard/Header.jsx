import React from "react";
import clsx from "clsx";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


import useStyles from "./style";


const Drawer = ({ parentCallback, open,mobileState }) => {

  const classes = useStyles();

  let two = {
    opent:false,
    open :true
  };

  const HandleDrawerToggle = async () => {
      parentCallback(two);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolSpace}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={HandleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton_, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open Darwer"
            edge="start"
            onClick={HandleDrawerToggle}
            className={clsx(classes.menuButton, mobileState && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Drawer;
