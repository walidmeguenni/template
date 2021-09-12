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
  OutlinedInput,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { Input, LockOutlined } from "@material-ui/icons";
import Icon from "../components/icon";
import { SignIn, SignUp } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../../../validations/CustomerValidation";
import useStyles from "../styles/js/Auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const initialvalue = {
    password: "",
    newPassword: "",
    confirmPassword: "",
   
};
const FormCustomer = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      
        dispatch(SignUp(values, history));
      
      setSubmitting(false);
      resetForm({});
    },
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  


  return (
    
        <form className={classes.form} onSubmit={formik.handleSubmit}> 
        <FormControl className={classes.TextField} variant="outlined" error={formik.touched.password && Boolean(formik.errors.password)} fullWidth >
            <InputLabel htmlFor="outlined-adornment-password"> Password </InputLabel>
            <OutlinedInput id="outlined-adornment-password" type={showPassword ? "text" : "password"} value={formik.values.password} name="password" onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton> </InputAdornment> } labelWidth={70} />
            <FormHelperText> {formik.touched.password && formik.errors.password} </FormHelperText>
          </FormControl>
          <FormControl className={classes.TextField} variant="outlined" error={formik.touched.newPassword && Boolean(formik.errors.newPassword)} fullWidth >
            <InputLabel htmlFor="outlined-adornment-newPassword"> Password </InputLabel>
            <OutlinedInput id="outlined-adornment-newPassword" type={showPassword ? "text" : "password"} value={formik.values.newPassword} name="password" onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle newPassword visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton> </InputAdornment> } labelWidth={70} />
            <FormHelperText> {formik.touched.newPassword && formik.errors.newPassword} </FormHelperText>
          </FormControl>
           <FormControl className={classes.TextField} variant="outlined" error={ formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) } fullWidth >
                <InputLabel htmlFor="outlined-adornment-confirmpassword">
                  Password
                </InputLabel>
                <OutlinedInput id="outlined-adornment-confirmpassword" type={showPassword ? "text" : "password"} name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle confirm password visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton> </InputAdornment> } labelWidth={70} />
                <FormHelperText> {formik.touched.confirmPassword && formik.errors.confirmPassword} </FormHelperText>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
              >
              </Button>
        </form>
  );
};
export default FormCustomer;
