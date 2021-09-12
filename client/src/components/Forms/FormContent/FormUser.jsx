import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateuser } from "../../../redux/actions/actionUser";
import { Grid, TextField, Button, FormControl, FormHelperText, InputLabel, Select, } from "@material-ui/core";
import { useFormik } from "formik";
import { validationSchema } from "../../../validations/UserValidation";
import useStyles from "../../../styles/js/Form";
const initialvalue = { name: "", address: "", gender: "", email: "", age: "" };
const FormCustomer = ({ currentId, setcurrentId, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const Edit = title === "Upadte User Info" ? true : false;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
      if (currentId) {
        dispatch(updateuser(values, currentId._id));
        setcurrentId(0);
      }
      setSubmitting(false);
      resetForm({});
    },
  });

  useEffect(() => {
    if (currentId) formik.setValues(currentId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField type="text" name="name" label="Full Name" variant="outlined" fullWidth className={classes.TextField} value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
      <TextField type="email" name="email" label="Email" variant="outlined" fullWidth className={classes.TextField} value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
      <TextField type="text" name="address" label="address" variant="outlined" fullWidth className={classes.TextField} value={formik.values.address} onChange={formik.handleChange} error={formik.touched.address && Boolean(formik.errors.address)} helperText={formik.touched.address && formik.errors.address} />
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <FormControl className={classes.TextField} variant="outlined" error={formik.touched.age && Boolean(formik.errors.age)} fullWidth >
            <InputLabel htmlFor="demo-age-select-error">Age</InputLabel>
            <Select native label="age" labelId="demo-age-select-error-label" id="demo-age-select-error" value={formik.values.age} onChange={formik.handleChange} error={formik.touched.age && Boolean(formik.errors.age)} helperText={formik.touched.age && formik.errors.age} inputProps={{ name: "age", id: "demo-age-select-error", }} >
              <option aria-label="None" value="" />
              {new Array(43).fill(0).map((value, index) => (
                <React.Fragment key={index}> <option value={index + 18}>{index + 18}</option> </React.Fragment>
              ))}
            </Select>
            <FormHelperText> {formik.touched.age && formik.errors.age} </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl className={classes.TextField} variant="outlined" error={formik.touched.gender && Boolean(formik.errors.gender)} fullWidth >
            <InputLabel id="demo-gender-select-error"> Gender </InputLabel>
            <Select native label="gender" labelId="demo-gender-select-error-label" id="demo-gender-select-error" value={formik.values.gender} onChange={formik.handleChange} inputProps={{ name: "gender", id: "demo-gender-select-error-label", }} >
              <option aria-label="None" value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            <FormHelperText> {formik.touched.gender && formik.errors.gender} </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button} >
        {Edit ? "UPDATE" : "CREATE"}
      </Button>
    </form>
  );
};
export default FormCustomer;