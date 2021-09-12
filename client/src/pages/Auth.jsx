import React, { useState } from "react";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  OutlinedInput,Link
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { LockOutlined } from "@material-ui/icons";
import Icon from "../components/icon";
import { SignIn, SignUp } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import {
  validationLogInSchema,
  validationSignUpSchema,
} from "../validations/authValidation";
import useStyles from "../styles/js/Auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const initialvalue = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyles();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  let user = useSelector((state) => state.auth);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: isSignup ? validationSignUpSchema : validationLogInSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (isSignup) {
        dispatch(SignUp(values, history));
      } else {
        dispatch(SignIn(values, history));
      }
      setSubmitting(false);
      resetForm({});
    },
  });

  const switchMode = () => {
    setIsSignup(!isSignup);
    dispatch({ type: "CLEAN_MSG" });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
    <Container component="main" maxWidth={isSignup ? "sm" : "xs"}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        {user.msg && (
          <Alert
            style={{ marginBottom: "10px", width: "100%" }}
            severity="error"
            variant="standard"
          >
            {user.msg}
          </Alert>
        )}
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <TextField
                    type="text"
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    className={classes.TextField}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <TextField
                    type="text"
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    className={classes.TextField}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
              </>
            )}
          </Grid>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            className={classes.TextField}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {isSignup && (
            <>
              <TextField
                type="text"
                name="address"
                label="address"
                variant="outlined"
                fullWidth
                className={classes.TextField}
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    className={classes.TextField}
                    variant="outlined"
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    fullWidth
                  >
                    <InputLabel htmlFor="demo-age-select-error">Age</InputLabel>
                    <Select
                      native
                      label="age"
                      labelId="demo-age-select-error-label"
                      id="demo-age-select-error"
                      value={formik.values.age}
                      onChange={formik.handleChange}
                      error={formik.touched.age && Boolean(formik.errors.age)}
                      helperText={formik.touched.age && formik.errors.age}
                      inputProps={{ name: "age", id: "demo-age-select-error" }}
                    >
                      <option aria-label="None" value="" />
                      {new Array(43).fill(0).map((value, index) => (
                        <React.Fragment key={index}>
                          <option value={index + 18}>{index + 18}</option>
                        </React.Fragment>
                      ))}
                    </Select>
                    <FormHelperText>
                      {" "}
                      {formik.touched.age && formik.errors.age}{" "}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    className={classes.TextField}
                    variant="outlined"
                    error={
                      formik.touched.gender && Boolean(formik.errors.gender)
                    }
                    fullWidth
                  >
                    <InputLabel id="demo-gender-select-error">
                      {" "}
                      Gender{" "}
                    </InputLabel>
                    <Select
                      native
                      label="gender"
                      labelId="demo-gender-select-error-label"
                      id="demo-gender-select-error"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      inputProps={{
                        name: "gender",
                        id: "demo-gender-select-error-label",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>{" "}
                    <FormHelperText>
                      {" "}
                      {formik.touched.gender && formik.errors.gender}{" "}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          )}
          <FormControl
            className={classes.TextField}
            variant="outlined"
            error={formik.touched.password && Boolean(formik.errors.password)}
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              {" "}
              Password{" "}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  {" "}
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {" "}
                    {showPassword ? <Visibility /> : <VisibilityOff />}{" "}
                  </IconButton>{" "}
                </InputAdornment>
              }
              labelWidth={70}
            />
            <FormHelperText>
              {" "}
              {formik.touched.password && formik.errors.password}{" "}
            </FormHelperText>
          </FormControl>
          {isSignup && (
            <>
              <FormControl
                className={classes.TextField}
                variant="outlined"
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-confirmpassword">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirmpassword"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      {" "}
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {" "}
                        {showPassword ? <Visibility /> : <VisibilityOff />}{" "}
                      </IconButton>{" "}
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
                <FormHelperText>
                  {" "}
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}{" "}
                </FormHelperText>
              </FormControl>
            </>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
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
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container alignItems="center">
            <Grid item xs={9} sm={9} md={9} lg={9}>
              <Button onClick={switchMode}  >
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} >
              {!isSignup && (
                <Link underline="none" variant="contained" href="/check" style={{ fontSize:"14px", color:"#00b0ff", }} >
                  forget password
                </Link>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export { Auth };
