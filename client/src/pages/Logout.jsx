import React, { useState } from "react";
import { CssBaseline, Typography, Button, Container } from "@material-ui/core";
import clsx from "clsx";

import Drawer from "../components/Drawer";
import useStyles from "../styles/js/Dashboard";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../redux/actions/authAction";
import { getusers } from "../redux/actions/actionUser";

const Logout = () => {
  const classes = useStyles();
  const [content, setContent] = useState(true);
  let user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = async () => {
    await dispatch(LOG_OUT(history, user.result._id));
    await dispatch(getusers());
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer setContent={setContent} content={content} title="Logout" />

      <main
        className={clsx(classes.content, { [classes.contentShift]: content })}
      >
        <div className={classes.toolbar} />
        <Container maxWidth="sm">
          <Typography variant="h4" align="center">
            We are so sad about your leaving :(
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ marginTop: "1rem" }}
          >
            Hi there, we hope you enjoyed waiting for your comeback
          </Typography>
          <div className={classes.container}>
            <div>
              <Button
                color="secondary"
                style={{ width: "13rem" }}
                variant="outlined"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};
export { Logout };
