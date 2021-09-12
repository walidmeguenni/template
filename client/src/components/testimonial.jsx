import React from "react";
import avatar1 from "../assets/img/avatar1.png";
import {
  Container,
  Typography,
  Avatar,
  CardContent,
  CardHeader,
  Card,
  Grid,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "../styles/js/testimonial";
export default function TestimonialCard() {
  let classes = useStyles();

  return (
    <Container style={{ marginBottom: "10px" }}>
      <Grid container spacing={4}>
        {new Array(6).fill(0).map((value, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card>
              <Rating name="read-only" value={3} className={classes.rate} readOnly  />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" src={avatar1}>
                    R
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
