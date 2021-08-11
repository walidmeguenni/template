/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation ,useHistory} from "react-router-dom";
import decode from 'jwt-decode';
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "../styles/js/Header";




const Drawer = ({ parentCallback, open, mobileState }) => {
const classes = useStyles();
  let two = {opent: false, open: true};

  const dispatch=useDispatch();
  const history=useHistory();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const token = user === null || user === void 0 ? void 0 : user.token;
  const HandleDrawerToggle = async () => {
    parentCallback(two);
  };
 
  const logout=()=>{
    dispatch({type:'LOGOUT'})
    history.push('/auth')
    setuser(null)
  }
  
    useEffect(() => {
      //JWT
      const decodedtoken=decode(token)
      if (decodedtoken.exp * 1000 < new Date().getTime()) logout()
      setuser(JSON.parse(localStorage.getItem("profile")));
  
    }, [location]);

  return (
    <>
      <AppBar position="fixed" color='inherit' elevation={0}
        className={clsx(classes.appBar, { [classes.appBarShift]: open, })} >
        <Toolbar className={clsx(classes.toolSpace, !open && classes.toolSpaceToggle)}>
          <div style={{ display:'flex', alignItems: 'center'}}>
            <div>
              <IconButton color="inherit" aria-label="open drawer" edge="start"
              className={clsx(classes.menuButton_.split(' '), open && classes.hide.split(' '))}
              onClick={HandleDrawerToggle} >
              <MenuIcon />
            </IconButton>
            </div>
            <div >
              <Typography variant="h5" noWrap> Dashboard </Typography>
            </div>
          </div>
          <div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
               {user ? (
              <>

              <div style={{ display:'flex', alignItems: 'center'}}>
                <div>
                <Typography  variant="h6" style={{paddingRight:'5px'}}>{user.result.name}</Typography>  
                </div>
                <div>
                <Avatar  src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>     
                </div>
              </div>
              </>
              ):(<AccountCircle />)}
             </div>
            </div>
          <IconButton color="inherit" aria-label="Open Darwer" edge="start" onClick={HandleDrawerToggle}
            className={clsx(classes.menuButton.split(' '), mobileState && classes.hide.split(' '))}>
            <Badge variant='dot' color="primary">
            <MenuIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Drawer;