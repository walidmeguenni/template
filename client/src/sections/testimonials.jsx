import React from "react";
import {
  Box,
  Card,
  Typography,
  Container,
  Avatar,
  CardContent,
  CardHeader,
  Grid,
} from "@material-ui/core";
import {TData} from "../config/testimonial"
import useStyles from "../styles/js/testimonial";
import Rating from "@material-ui/lab/Rating";
import avatar1 from "../assets/img/avatar1.png";

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div id="testimonail" style={{ marginTop: "100px" }}>
      <Box align="center" style={{ marginBottom: "50px" }}>
        <Typography variant="h4" className={classes.smalltitle} gutterBottom>
          Testimonail
        </Typography>
        <Typography variant="h6" className={classes.bigtitle} gutterBottom>
          Meet Client Satisfaction
        </Typography>
      </Box>
      <Container
        maxWidth="md"
        component="main"
        style={{ marginBottom: "10px" }}
      >
        <Grid container spacing={4}>
          {TData.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card>
                <Rating
                  className={classes.rate}
                  name="read-only"
                  value={value.rating}
                  readOnly
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {value.content} </Typography>
                </CardContent>
                <CardHeader
                  className={classes.title}
                  avatar={<Avatar aria-label="recipe" src={value.avatar} />}
                  title={value.title}
                  subheader={value.subheader}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
