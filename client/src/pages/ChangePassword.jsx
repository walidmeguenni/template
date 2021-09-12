import React, { useState } from "react";
import { verifyToken } from "../services/api/apiAuth";
import { useFormik } from "formik";
import * as yup from "yup";
import decode from "jwt-decode";
import Button from "@material-ui/core/Button";
import { FormControl,Paper,Avatar,Typography, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput,Container, } from "@material-ui/core";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "../styles/js/Auth";
import { CHANGE } from "../redux/actions/authAction";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { LockOutlined } from "@material-ui/icons";

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});
const ChangePassword = (props) => {
    const [one, setone] = useState(true)
  if (one&&props.match.path === "/users/change/:token") {
    verifyToken(props.match.params.token);
    setone(false)
  }
  const token = decode(props.match.params.token);
 
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { newPassword: "", confirmPassword: "", },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(CHANGE(values, history,token.userId));
      setSubmitting(false);
      resetForm({});
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container component="main" maxWidth="xs">
<Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
         Password
        </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormControl className={classes.TextField} variant="outlined" error={formik.touched.newPassword && Boolean(formik.errors.newPassword)} fullWidth >
          <InputLabel htmlFor="outlined-adornment-newPassword">
            New Password
          </InputLabel>
          <OutlinedInput id="outlined-adornment-newPassword" type={showPassword ? "text" : "password"} value={formik.values.newPassword} name="newPassword" onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle newPassword visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton> </InputAdornment> } labelWidth={70} />
          <FormHelperText>
            {formik.touched.password && formik.errors.password}
          </FormHelperText>
        </FormControl>

        <FormControl className={classes.TextField} variant="outlined" error={ formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) } fullWidth >
          <InputLabel htmlFor="outlined-adornment-confirmpassword">
            Confirm Password
          </InputLabel>
          <OutlinedInput id="outlined-adornment-confirmpassword" type={showPassword ? "text" : "password"} name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle confirm password visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton> </InputAdornment> } labelWidth={70} />
          <FormHelperText>
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </FormHelperText>
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > confirm </Button>
      </form>
      </Paper>
    </Container>
  );
};
export { ChangePassword };
