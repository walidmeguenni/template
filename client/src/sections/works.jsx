import React from "react";
import useStyles from "../styles/js/works";
import { WData } from "../config/works";
import {
  Paper,
  Typography,
  Container,
  Grid,
  Card,
  Box,
  Button,
  Link,
} from "@material-ui/core";
const Works = () => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <Container>
        <Card className={classes.root}>
          <Typography align="center" className={classes.smalltitle}>
            WHATS THE FUNCTION
          </Typography>
          <Typography align="center" className={classes.title}>
            Let’s see how it works
          </Typography>
          <Grid container spacing={3} className={classes.grid}>
            {WData.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box className={classes.card} key={index}>
                  <Box align="center">
                    <img src={value.icon} alt="" />
                  </Box>
                  <Box align="center">
                    <Typography align="center" className={classes.icontitle}>
                      {value.title}
                    </Typography>
                    <Typography align="center" className={classes.content}>
                      {value.content}
                    </Typography>

                    {value.button && (
                      <Link
                        component={Button}
                        underline="none"
                        href={value.link}
                        variant="contained"
                        className={classes.button1}
                      >
                        {value.button}
                      </Link>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </div>
  );
};
export default Works;
