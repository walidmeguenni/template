import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import useStyles from "../styles/js/about";
import about from "../assets/img/landing/undraw_deliveries_131a.svg";
const About = () => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.toolbar}>
      <Container className={classes.page}>
          <Grid container spacing={1}>
            <Grid item xs={12}  sm={6} md={5} lg={4}>
              <Typography variant="h4" align="center" className={classes.title}>
                About Us
              </Typography>
              <Typography  className={classes.text}>
                Space Store is a landing online Inventory management platform
                Multiple users and domains are used to store goods and manage
                the content of stores and stores This site is the best place for
                start-ups, stores and business owners who cannot pay the high
                price for their own warehouse management application. The Space
                Store provides a group of features that make it quick to use,
                automatic update, and perfect organization ... all to ensure the
                convenience of the customer.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={7} lg={8}>
              <img src={about} alt="" className={classes.image} />
            </Grid>
          </Grid>
      </Container>
    </div>
  );
};

export default About;
