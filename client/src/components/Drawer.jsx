import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Drawer, Hidden, Typography, IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import List from "./List";
import Header from "./Header";

import { SideBarData } from "../config/SideBarData";
import useStyles from "../styles/js/Drawer";

const _Drawer = ({ window, setContent, content, title }) => {
  const classes = useStyles();

  const theme = useTheme();

  const [mobileState, setMobileState] = useState(false);
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileState(!mobileState);
  };

  const handle = () => {
    setOpen(!open);
    setContent(!content);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        open={open}
        mobileState={mobileState}
        setMobileState={setMobileState}
        setOpen={setOpen}
        setContent={setContent}
        content={content}
        title={title}
      />
      <div className={classes.toolbar}>
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
                <IconButton color="secondary" onClick={handleDrawerToggle}>
                  <CloseIcon />
                </IconButton>
              </div>
              <List Data={SideBarData} />
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
                  Spacestore
                </Typography>
                <IconButton
                  color="inherit"
                  onClick={handle}
                  style={{ marginTop: "2px" }}
                >
                  <ChevronLeftIcon style={{ color: "White" }} />
                </IconButton>
              </div>
              <div className={!open&&classes.margin}>
                <List Data={SideBarData} />
              </div>
            </Drawer>
          </Hidden>
        </nav>
      </div>
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
