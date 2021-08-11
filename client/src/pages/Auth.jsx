import React, { useState} from "react";
import {Avatar,Button, Paper,Grid, Typography,Container,} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "../styles/js/Auth";
import Icon from "../components/icon";
import Input from "../components/input";
import {SignIn,SignUp} from '../redux/actions/authAction'
import { useDispatch ,useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert} from "@material-ui/lab";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyles();


  const [isSignup, setIsSignup] = useState(false);
  const [formData, setformData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);
  


  const history = useHistory();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleChange = (e) => {setformData({...formData,[e.target.name]:e.target.value})};

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(SignUp(formData,history))
    } else {
      dispatch(SignIn(formData,history))
    }
  };

  const googleSuccess = async (res) => {
    const token = res === null || res === void 0 ? void 0 : res.tokenId; //res?.token
    const result = res === null || res === void 0 ? void 0 : res.profileObj; //undifien or data handle the error
    try {
      dispatch({ type: "AUTH", payload: { result, token } });
      history.push("/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        {user.msg && (
                <Alert  style={{marginBottom :'10px',width:"100%"}} severity="error" variant="filled" >
                {user.msg}
              </Alert>
             ) }
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
         {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="774584843640-780b1p2ls8u0o63upfp9qb5h1qcvv2qb.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export {Auth};
