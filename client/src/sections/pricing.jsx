import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Box,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import yes from "../assets/icons/yes.svg";
import { tiers } from "../config/pricing";
import useStyles from "../styles/js/pricing";
const Pricing = () => {
  const classes = useStyles();
  return (
    <div id="pricing" className={classes.paper}>
      <Container>
        <Box align="center">
          <Typography variant="h4" className={classes.smalltitle} gutterBottom>
            PRICING 
          </Typography>
          <Typography variant="h6" className={classes.bigtitle} gutterBottom>
            Choose your pricing policy
          </Typography>
        </Box>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Box key={line} className={classes.fix}>
                          <img src={yes} alt="" style={{marginRight:"10px"}} />
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                          >
                            {line}
                          </Typography>
                        </Box>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      className={classes.button1}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Pricing;
