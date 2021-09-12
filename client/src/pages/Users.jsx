import React, {  useState } from "react";
import clsx from "clsx";
import Drawer from '../components/Drawer'
import Tabs from '../components/Tabs'
import { CssBaseline } from "@material-ui/core";

import useStyles from "../styles/js/Dashboard";
const Users = () => {
    const classes = useStyles();
    const [content, setContent] = useState(true);

    return (
        <div className={classes.root}>
        <CssBaseline />
        <Drawer setContent={setContent} content={content} title="Users"/>
  
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: content,
          })}
        >
          <div className={classes.toolbar} />
             <Tabs/>
        </main>
        </div>
    )
}
export {Users}