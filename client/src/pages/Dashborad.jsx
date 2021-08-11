import React, {  useState, useCallback } from "react";
import clsx from "clsx";
import { Grid, Card, CardContent, Paper } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import Drawer from "../components/Drawer";
import useStyles from "../styles/js/Dashboard";
import TableIntro from "../components/tableintro";
import Chart from "../components/Chart";
import PersonalInfo from "../components/personalInfo";
import CardValue from "../components/Cardvalue";
import { Title } from "../config/TitleData";
const Dashborad = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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
        <Grid container spacing={2}>
          {Title.map((val, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <Card className={classes.card} variant="elevation">
                <CardContent>
                  <CardValue value={index} />
                  <CardValue value={val.title} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        <Grid item xs={12} md={7} lg={8}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Paper className={fixedHeightPaper}>
              <PersonalInfo />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TableIntro />
            </Paper>
          </Grid> 
        </Grid>
      </main>
    </div>
  );
};
export { Dashborad };
