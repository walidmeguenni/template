import React from "react";
import { Grid, Paper} from "@material-ui/core";
import clsx from 'clsx'
import useStyle from "./style";
import Table from "./Table";
import Chart from './chart';
import Progress from './Progress'
const Content = () => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <div className={classes.toolbar} ></div>
      <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Progress />
              </Paper>
            </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table />
          </Paper>
        </Grid> 
      </Grid>
    </>
  );
};

export default Content;
