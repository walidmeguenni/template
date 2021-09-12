import React from "react";
import {
  Typography,
  Grid,
  Card,
  Container,
  CardContent,
} from "@material-ui/core";
import useStyles from "../styles/js/feature";
import { FData } from "../config/feauters";
const Feature = () => {
  const classes = useStyles();
  return (
    <div id="features" className={classes.toolbar}>
      <Container>
        <Typography variant="h4" align="center" className={classes.title}>
          Features
        </Typography>
        <Grid container spacing={2} className={classes.cards}>
          {FData.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontent}>
                  <div className={classes.icon}>
                    <img src={value.icon} alt="" />
                  </div>
                </CardContent>
                <Typography variant="h6" align="center">
                  {value.title}
                </Typography>
                <CardContent>
                  <Typography className={classes.content} align="center">
                    {value.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Feature;
