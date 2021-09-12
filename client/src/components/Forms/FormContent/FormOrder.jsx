import React, { useEffect } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { creatorders, updateorder } from "../../../redux/actions/actionOrders";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { validationSchema } from "../../../validations/OrderValidation";
import useStyles from "../../../styles/js/Form";
const initialvalue = {
  name: "",
  products: "",
  totaleprice: "",
};
const FormProucts = ({ currentId, setcurrentId, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.orders.find((p) => p._id === currentId) : null
  );
  const Edit = title === "Update Material" ? true : false;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (currentId) {
        dispatch(updateorder(values, currentId));
        setcurrentId(0);
        
      } else {
        dispatch(creatorders(values));
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
        name="name"
        className={classes.TextField}
        label="Full Name"
        fullWidth={true}
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        type="text"
        name="products"
        className={classes.TextField}
        label="products"
        fullWidth={true}
        variant="outlined"
        value={formik.values.products}
        onChange={formik.handleChange}
        error={formik.touched.products && Boolean(formik.errors.products)}
        helperText={formik.touched.products && formik.errors.products}
      />
      <TextField
        type="number"
        name="totaleprice"
        fullWidth={true}
        className={classes.TextField}
        label="totaleprice"
        variant="outlined"
        value={formik.values.totaleprice}
        onChange={formik.handleChange}
        error={formik.touched.totaleprice && Boolean(formik.errors.totaleprice)}
        helperText={formik.touched.totaleprice && formik.errors.totaleprice}
      />

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
export default FormProucts;
