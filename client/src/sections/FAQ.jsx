import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "../styles/js/Fqs";
import { QData } from "../config/faq";
const FAQ = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 150 }}>
      <Container maxWidth="md" component="main" style={{ marginBottom: 80 }}>
        <Box align="center">
          <Typography variant="h4" className={classes.bigtitle} gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography className={classes.smalltitle} gutterBottom>
            Get quick answers to the latest frequently asked questions
          </Typography>
        </Box>
        {QData.map((value, index) => (
          <Accordion square={true} key={index} className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h6">{value.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="textPrimary" component="p">
                {value.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};

export default FAQ;
