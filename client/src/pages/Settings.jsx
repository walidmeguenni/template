import React, { useState } from "react";
import clsx from "clsx";
import { Grid, Paper } from "@material-ui/core";
import Drawer from "../components/Drawer";
import { CssBaseline } from "@material-ui/core";
import useStyles from "../styles/js/Dashboard";
import Upload from "../components/Upload";
import Password from "../components/Password";
const Settings = () => {
  const classes = useStyles();
  const [content, setContent] = useState(true);
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer setContent={setContent} content={content} title="Setting"/>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: content,
        })}
      >
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Paper variant="outlined">
              <Upload />
            </Paper>
          </Grid>
          <Grid item xs={12}  lg={12}>
            <Password />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
export { Settings };
