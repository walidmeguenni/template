/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import decode from "jwt-decode";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
} from "@material-ui/core";
import { getusers } from "../redux/actions/actionUser";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "../styles/js/Header";

import logo from "../assets/logo/Vector 7.svg";

const Drawer = ({ setMobileState,content,setContent, setOpen,open, mobileState, title }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const token = user === null || user === void 0 ? void 0 : user.token;
  const HandleDrawerToggle =  () => {
    setMobileState(!mobileState)
    setOpen(!open)
    setContent(!content)
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setuser(null);
  };
  const test = useSelector((state) =>
    user.result._id ? state.users.find((p) => p._id === user.result._id) : null
  );
  useEffect(() => {
    dispatch(getusers());
    //JWT//
    const decodedtoken = decode(token);
    if (decodedtoken.exp * 1000 < new Date().getTime()) logout();
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch, location]);

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar
          className={clsx(classes.toolSpace, !open && classes.toolSpaceToggle)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {!open && <img src={logo} alt="" style={{paddingRight:20}}/>}
            
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                className={clsx(
                  classes.menuButton_.split(" "),
                  open && classes.hide.split(" ")
                )}
                onClick={HandleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div>
              <Typography variant="h5" className="Manage-title" noWrap>
                {title}
              </Typography>
            </div>
          </div>
          <div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {user ? (
                <>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <Typography variant="h6" style={{ paddingRight: "5px" ,color:"#00A3FE"}} noWrap>
                        {test && test.name}
                      </Typography>
                    </div>
                    <div>
                      <Avatar src={test && test.imageUrl}>
                        {user.result.name.charAt(0)}
                      </Avatar>
                    </div>
                  </div>
                </>
              ) : (
                <AccountCircle />
              )}
            </div>
          </div>
          <IconButton
            color="inherit"
            aria-label="Open Darwer"
            edge="start"
            onClick={HandleDrawerToggle}
            className={clsx(
              classes.menuButton.split(" "),
              mobileState && classes.hide.split(" ")
            )}
          >
            <Badge variant="dot" color="primary">
              <MenuIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Drawer;
