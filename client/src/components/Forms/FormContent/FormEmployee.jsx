import React, { useEffect } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  createmployees,
  updateemployee,
} from "../../../redux/actions/actionEmployee";
import {
  validationSchema,
  updatevalidationSchema,
} from "../../../validations/EmployeeValidation";
import useStyles from "../../../styles/js/Form";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
const initialvalue = {
  fullname: "",
  dateNaissance: "2000-12-08",
  address: "",
  gender: "",
  phone: "",
  salary: "",
  role: "",
  EmployeeImage: "",
};
const FormEmployee = ({ currentId, setcurrentId, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.employees.find((p) => p._id === currentId) : null
  );
  const Edit = title === "Update Material" ? true : false;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: Edit ? updatevalidationSchema : validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (currentId) {
        dispatch(updateemployee(values, currentId));
        setcurrentId(0);
      } else {
        let formData = new FormData();
        formData.append("fullname", values.fullname);
        formData.append("gender", values.gender);
        formData.append("phone", values.phone);
        formData.append("address", values.address);
        formData.append("salary", values.salary);
        formData.append("role", values.role);
        formData.append("dateNaissance", values.dateNaissance);
        formData.append("EmployeeImage", values.EmployeeImage);
        dispatch(createmployees(formData));
      }
      setSubmitting(false);
      resetForm({});
    },
  });
  useEffect(() => {
    if (post) formik.setValues(post);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        type="text"
        name="fullname"
        className={classes.TextField}
        label="Full Name"
        fullWidth={true}
        variant="outlined"
        value={formik.values.fullname}
        onChange={formik.handleChange}
        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
        helperText={formik.touched.fullname && formik.errors.fullname}
      />
      <TextField
        type="number"
        name="phone"
        className={classes.TextField}
        label="phone"
        fullWidth={true}
        variant="outlined"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <TextField
        type="text"
        name="address"
        className={classes.TextField}
        label="address"
        fullWidth={true}
        variant="outlined"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      <TextField
        type="text"
        name="gender"
        className={classes.TextField}
        label="Gender"
        fullWidth={true}
        variant="outlined"
        value={formik.values.gender}
        onChange={formik.handleChange}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      />
      <TextField
        id="date"
        type="date"
        className={classes.TextField}
        label="Birthday"
        fullWidth={true}
        variant="outlined"
        defaultValue={formik.values.dateNaissance}
        onChange={formik.handleChange}
        error={
          formik.touched.dateNaissance && Boolean(formik.errors.dateNaissance)
        }
        helperText={formik.touched.dateNaissance && formik.errors.dateNaissance}
      />
      <TextField
        type="number"
        name="salary"
        fullWidth={true}
        className={classes.TextField}
        label="salary"
        variant="outlined"
        value={formik.values.salary}
        onChange={formik.handleChange}
        error={formik.touched.salary && Boolean(formik.errors.salary)}
        helperText={formik.touched.salary && formik.errors.salary}
      />
      <TextField
        type="text"
        name="role"
        className={classes.TextField}
        label="Role"
        fullWidth={true}
        variant="outlined"
        value={formik.values.role}
        onChange={formik.handleChange}
        error={formik.touched.role && Boolean(formik.errors.role)}
        helperText={formik.touched.role && formik.errors.role}
      />
      {Edit ? (
        ""
      ) : (
        <div>
          <Button
            variant="contained"
            color="default"
            component="label"
            startIcon={<CloudUploadIcon />}
          >
            Upload
            <input
              type="file"
              accept="image/*"
              name="EmployeeImage"
              id="EmployeeImage"
              onChange={(event) => {
                formik.setFieldValue("EmployeeImage", event.target.files[0]);
              }}
              hidden
            />
          </Button>
          {formik.touched.EmployeeImage && formik.errors.EmployeeImage ? (
            <div className={classes.errors}>{formik.errors.EmployeeImage}</div>
          ) : null}
        </div>
      )}
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        type="submit"
        fullWidth
      >
        {Edit ? "UPDATE" : "CREATE"}
      </Button>
    </form>
  );
};
export default FormEmployee;
