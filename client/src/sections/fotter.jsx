import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import React from "react";
import { footers } from "../config/footer";
import useStyles from "../styles/js/footer";
const Fotter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-between">
          {footers.map((footer) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={footer.title}>
              <Typography variant="h6" style={{ color: "white" }} gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ color: "white" }}
                    >
                      <Typography> {item}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5} style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Copyright />
          </div>
          <div>
            <Typography variant="body2">
              2021 Spacestore,Inc.All rights reserved
            </Typography>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Fotter;
