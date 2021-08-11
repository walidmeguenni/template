import React, {  useState, useCallback } from "react";
import clsx from "clsx";
import Drawer from '../components/Drawer'
import Tabs from '../components/Tabs'
import { CssBaseline } from "@material-ui/core";

import useStyles from "../styles/js/Dashboard";
const Users = () => {
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
             <Tabs/>
        </main>
        </div>
    )
}
export {Users}