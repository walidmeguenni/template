import {
  Button,
  Grid,
  TextField,
  Typography,
  Hidden,
  Container,
} from "@material-ui/core";
import { CHECK } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import forget from "../assets/images/undraw_secure_login_pdn4.svg";
import { Alert } from "@material-ui/lab";
const ForgetPassWord = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  let user = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const data = {
        email,
      };
      dispatch(CHECK(data));
    }
  };
  return (
    <div style={{ marginTop: 100 }}>
      <Container>
        <Grid
          container
          spacing={1}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={7} md={6} lg={7}>
            <Hidden xsDown>
              <img
                src={forget}
                alt=""
                style={{ width: "100%", height: " auto" }}
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={5} md={6} lg={5}>
            {user.msg ? (
              <Alert
                style={{ marginBottom: "10px", width: "100%" }}
                severity="info"
                variant="standard"
              >
                {user.msg}
              </Alert>
            ) : (
              <>
                <Typography
                  variant="h4"
                  style={{ color: "#00b0ff" }}
                  gutterBottom
                >
                  Forgot Password
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Enter the email address assocaited with your account
                </Typography>
                <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                  <TextField
                    type="email"
                    name="email"
                    placeholder="Enter Email Adress"
                    variant="filled"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    fullWidth
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 10,
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#00b0ff" }}
                    >
                      Next
                    </Button>
                  </div>
                </form>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export { ForgetPassWord };
