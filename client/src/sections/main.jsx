import React from "react";
import landing from "../assets/img/landing/undraw_logistics_x4dc.svg";
import { Button,Link, Grid, Container, Typography, Hidden } from "@material-ui/core";
import useStyles from "../styles/js/Mainc";
const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <Container id="main">
        <Grid
          container
          spacing={1}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={5} md={6} lg={5} className={classes.container}>
            <Typography variant="h4" className={classes.mainText}>
              SpaceStore.
              <br /> where we reinvent <br />
              the meaning of Storage
            </Typography>
            <Grid item xs={12} sm={8} md={6} lg={4} className={classes.pos}>
              <Link  component={Button} href="/auth" underline="none" variant="contained" className={classes.button1} fullWidth>
                GetStarted
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={6} lg={7} >
            <Hidden xsDown>
              <img src={landing} className={classes.imagesize} alt="" />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
