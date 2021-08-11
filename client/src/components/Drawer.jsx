import React, { useState, useCallback ,useEffect} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Drawer, Hidden, Typography, Avatar } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from '@material-ui/icons/Close';

import List from "./List";
import Header from "./Header";

import {SideBarData} from '../config/SideBarData'
// import Content from "../../pages/Table";
import useStyles from "../styles/js/Drawer";

import Repos from "../assets/images/depositphotos_67151237-stock-illustration-letter-i-logo-icon-design.jpg";

const _Drawer = ({ window,Callback }) => {
  const classes = useStyles();

  const theme = useTheme();

  const [mobileState, setMobileState] = useState(false);
  const [open, setOpen] = useState(true);
 

  const callback = useCallback(
    async (state) => {
      try {
        if (open) {
          await setMobileState(!state.opent);
        } else {
          await setOpen(state.open);
          await Callback(state.open)
        }
      
      } catch (error) {
        console.log(error);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[open]);
  

  const handleDrawerToggle = () => {
    setMobileState(!mobileState);
    
  };

  const handle = () => {
    setOpen(!open);
    Callback(open)
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
useEffect(() => {
  localStorage.setItem('open ', open)
   
}, [open])
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header parentCallback={callback} open={open} mobileState={mobileState} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="persistent"
            anchor={theme.direction === "rlt" ? "right" : "left"}
            open={mobileState}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperToggle,
            }}
            ModalProps={{
              keepMounted: true,
            }}
            elevation={0}
          >
            <div className={classes.drawerHeader}>
              <IconButton 
              color='secondary'
              onClick={handleDrawerToggle}>
              <CloseIcon />
              </IconButton>
            </div>
            <List Data={SideBarData}/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: clsx(classes.drawerPaper, {
                [classes.drawerPaperClose]: !open,
              }),
            }}
            variant="permanent"
            open={open}
          >
            <div className={classes.drawerHeader}>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontFamily: "Fira Code",
                }}
              >
                {open ? (
                  "Inventory"
                ) : (
                  <Avatar
                    variant="rounded"
                    className={classes.square}
                    src={Repos}
                  />
                )}
              </Typography>
              <IconButton
              color='secondary'
                onClick={handle}
                style={
                  {
                    marginTop:'2px'
                    
                  }
                }
              >
                {/* <CloseIcon /> */}
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
           
            <List Data={SideBarData}/>
          </Drawer>
        </Hidden>
      </nav>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Content />
      </main> */}
    </div>
  );
};
_Drawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default _Drawer;
