import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Drawer, Hidden } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CssBaseline} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Menuu from "./Menu";
import Header from "./Header";
import useStyles from "./style";
import Content from "./Content";


const _Drawer = (props) => {
  const { window } = props;

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
        }
      } catch (error) {
        console.log(error);
      }
    },
    [open]
  );

  const handleDrawerToggle = () => {
    setMobileState(!mobileState);
  };

  const handle = () => {
    setOpen(!open);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
    
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
              paper: classes.drawerPapert,
            }}
            ModalProps={{
              keepMounted: true,
            }}
            elevation={0}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerToggle}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
              <Menuu /> 
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: clsx(classes.drawerPaper, {[classes.drawerPaperClose] : !open  }),
            }}
            variant="permanent"
            open={open}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handle}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Menuu />
          </Drawer>
        </Hidden>
      </nav>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Content />
      </main>
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
