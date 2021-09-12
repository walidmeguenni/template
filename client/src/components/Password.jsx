import React, { useState } from "react";
import { Button, IconButton, InputAdornment, Typography, FormControl, InputLabel, FormHelperText, OutlinedInput, Accordion, AccordionSummary, Card, } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { updatepassword } from "../redux/actions/authAction";
import { validationSchema } from "../validations/Passwordvalidation";
import useStyles from "../styles/js/Password"
import SaveIcon from "@material-ui/icons/Save";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const initialvalue = { password: "", newPassword: "", confirmPassword: "", };
const UpdatePassword = () => {
  const classes = useStyles();
  const token = JSON.parse(localStorage.getItem("profile"));
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(updatepassword(values, history, token.result._id));
      setSubmitting(false);
      resetForm({});
    },
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
            <Typography className={classes.titlename}>
              Change Password
            </Typography>
          </AccordionSummary>
            <Card className={classes.card}>
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <FormControl className={classes.TextField} variant="outlined" error={ formik.touched.password && Boolean(formik.errors.password) } fullWidth >
                  <InputLabel htmlFor="outlined-adornment-password"> Password </InputLabel>
                  <OutlinedInput id="outlined-adornment-password" type={showPassword ? "text" : "password"} value={formik.values.password} name="password" onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? ( <Visibility /> ) : ( <VisibilityOff /> )} </IconButton> </InputAdornment> } labelWidth={70} />
                  <FormHelperText> {formik.touched.password && formik.errors.password} </FormHelperText>
                </FormControl>
                <FormControl className={classes.TextField} variant="outlined" error={ formik.touched.newPassword && Boolean(formik.errors.newPassword) } fullWidth >
                  <InputLabel htmlFor="outlined-adornment-newPassword"> Password </InputLabel>
                  <OutlinedInput id="outlined-adornment-newPassword" type={showPassword ? "text" : "password"} value={formik.values.newPassword} name="newPassword" onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle newPassword visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? ( <Visibility /> ) : ( <VisibilityOff /> )} </IconButton> </InputAdornment> } labelWidth={70} />
                  <FormHelperText> {formik.touched.newPassword && formik.errors.newPassword} </FormHelperText>
                </FormControl>
                <FormControl className={classes.TextField} variant="outlined" error={ formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) } fullWidth >
                  <InputLabel htmlFor="outlined-adornment-confirmpassword"> Password </InputLabel>
                  <OutlinedInput id="outlined-adornment-confirmpassword" type={showPassword ? "text" : "password"} name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle confirm password visibility" onClick={handleClickShowPassword} edge="end" > {showPassword ? ( <Visibility /> ) : ( <VisibilityOff /> )} </IconButton> </InputAdornment> } labelWidth={70} />
                  <FormHelperText> {formik.touched.confirmPassword && formik.errors.confirmPassword} </FormHelperText>
                </FormControl>
                <div className={classes.button}>
                  <Button variant="contained" color="primary" size="small" type="submit" startIcon={<SaveIcon />} > Save </Button>
                </div>
              </form>
            </Card>
        </Accordion>
      </div>
    </>
  );
};
export default UpdatePassword;
