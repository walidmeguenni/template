import React, {  useState, useCallback } from "react";
import clsx from "clsx";
import Drawer from '../components/Drawer'
import { CssBaseline } from "@material-ui/core";

import {Button} from '@material-ui/core'
import useStyles from "../styles/js/Dashboard";

import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
const Logout = () => {
    const classes = useStyles();
    const [open, setopen] = useState(false);
  const callback = useCallback(  async () => {
    try {
       await setopen(!open);
    } catch (error) {
      console.log(error);
    }
  },
  [open]);
  const dispatch = useDispatch()
  const history= useHistory()
  const logout=()=>{
    dispatch({type:'LOGOUT'})
    history.push('/auth')
  }
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Drawer Callback={callback} />
  
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: !open,
          })}
        >
          <div className={classes.toolbar} />
          <Button onClick={logout}>Logout</Button>
        </main>
        </div>
    )
}
export {Logout} 