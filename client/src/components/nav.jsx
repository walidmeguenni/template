import React, { useState, Fragment } from "react";
import { AppBar, Toolbar, Typography, Link, Button } from "@material-ui/core";
import useStyles from "../styles/js/Nav1";
import logo from "../assets/img/logo/Vector 7.svg";
import Drwer1 from "./Drwer1";
const NavBarData = [
  { value: "Home", link: "#main" },
  { value: "About", link: "#about" },
  { value: "Features", link: "#features" },
  { value: "Pricing", link: "#pricing" },
  { value: "Testimonaila", link: "#testimonail" },
];

const Nav = () => {
  const classes = useStyles();
  const [link, setlink] = useState("#main");
  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar component="nav" variant="dense" className={classes.root}>
          <div className={classes.toolbarTitle}>
            <img src={logo} width="48" height="48" alt="landing" />
            <Typography variant="h5" className={classes.title}>
              SPACESTORE
            </Typography>
          </div>
          <div className={classes.hide}>
            <div className={classes.link}>
              {NavBarData.map((val, key) => (
                <Link
                  key={key}
                  href={val.link}
                  underline="none"
                  className={
                    val.link === link
                      ? classes.toolbarLinkActive
                      : classes.toolbarLink
                  }
                  onClick={() => setlink(val.link)}
                >
                  {val.value}
                </Link>
              ))}
            </div>
          </div>

          <div className={classes.hide}>
            <div style={{ display: "flex", flexWrap: "nowrap" }}>
              <div style={{ marginRight: "1rem" }}>
                <Link component={Button} href="/auth" underline="none">
                  Login
                </Link>
              </div>
              <div>
                <Link
                  href="/auth"
                  component={Button}
                  underline="none"
                  variant="outlined"
                  className={classes.buttonHeader}
                >
                  Singup
                </Link>
              </div>
            </div>
          </div>
          <Drwer1 />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
