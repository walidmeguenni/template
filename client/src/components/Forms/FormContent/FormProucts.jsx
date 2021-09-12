import React, { useEffect } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { creatproducts, updateProduct } from "../../../redux/actions/actionProducts";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { validationSchema, updatevalidationSchema } from "../../../validations/ProductValidtion";
import useStyles from "../../../styles/js/Form";
const initialvalue = {name: "",quantity: "",price: "",status: "",productImage: "",};
const FormProucts = ({ currentId, setcurrentId, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.products.find((p) => p._id === currentId) : null
  );
  const Edit = title === "Update Product" ? true : false;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: Edit ? updatevalidationSchema : validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
     if (currentId) {
        dispatch(updateProduct(values, currentId));
        setcurrentId(0);
      } else {
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("quantity", values.quantity);
      formData.append("status", values.status);
      formData.append("productImage", values.productImage);
      
        dispatch(creatproducts(formData));
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
      <TextField type="text" name="name" className={classes.TextField} label="Name" fullWidth={true} variant="outlined" value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
      <TextField type="number" name="quantity" className={classes.TextField} label="Quantity" fullWidth={true} variant="outlined" value={formik.values.quantity} onChange={formik.handleChange} error={formik.touched.quantity && Boolean(formik.errors.quantity)} helperText={formik.touched.quantity && formik.errors.quantity} />
      <TextField type="number" name="price" className={classes.TextField} label="Price" fullWidth={true} variant="outlined" value={formik.values.price} onChange={formik.handleChange} error={formik.touched.price && Boolean(formik.errors.price)} helperText={formik.touched.price && formik.errors.price} />
      <TextField type="text" name="status" fullWidth={true} className={classes.TextField} label="status" variant="outlined" value={formik.values.status} onChange={formik.handleChange} error={formik.touched.status && Boolean(formik.errors.status)} helperText={formik.touched.status && formik.errors.status} />
      {Edit ? ( "" ) : (
        <div>
          <Button variant="contained" color="default" component="label" startIcon={<CloudUploadIcon />} >
            Upload
            <input type="file" accept="image/*" name="productImage" id="productImage" onChange={(event) => { formik.setFieldValue("productImage", event.target.files[0]); }} hidden />
          </Button>
          {formik.touched.productImage && formik.errors.productImage ? (
            <div className={classes.errors}>{formik.errors.productImage}</div>
          ) : null}
        </div>
      )}
      <Button className={classes.button}color="primary"variant="contained"type="submit"fullWidth>
       {Edit?"UPDATE":"CREATE"}
      </Button>
    </form>
  );
};
export default FormProucts;

// import React, { useState, useEffect } from "react";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { useDispatch, useSelector } from "react-redux";
// import { creatproducts, updateProduct } from "../../../redux/actions/actionProducts";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField, Button } from "@material-ui/core";


// const useStyles = makeStyles((theme) => ({
//   TextField: {
//     paddingBottom: theme.spacing(1),
//   },
//   button: {
//     marginTop: theme.spacing(1),
//   },
// }));

// const FormProucts = ({ currentId, setcurrentId,title }) => {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const post = useSelector((state) =>
//     currentId ? state.products.find((p) => p._id === currentId) : null
//   );
//   const [PostNew, setPostNew] = useState({
//     name: "",
//     quantity: "",
//     price: "",
//     status: "",
//     productImage: "",
//   });
//   const clear = () => {
//     if (currentId) {
//       setcurrentId(0);
//     }
//     setPostNew({ name: "", quantity: "", price: "", status: "" });
//   };
//   const Handlsubmit = (e) => {
//     e.preventDefault();
//     let formData = new FormData();
//     formData.append("name", PostNew.name);
//     formData.append("price", PostNew.price);
//     formData.append("quantity", PostNew.quantity);
//     formData.append("status", PostNew.status);
//     formData.append("productImage", PostNew.productImage);
//     if (currentId) {
//       dispatch(updateProduct(PostNew, currentId));
//     } else {
//       dispatch(creatproducts(formData));
//     }
//     clear();
//     PostNew.productImage = e.target.reset();
//   };
//   useEffect(() => {
//     //UPDATE : change the data of Dialog by post
//     if (post) setPostNew(post);
//   }, [post]);
//   return (
//     <form onSubmit={Handlsubmit}>
//       <TextField
//         type="text"
//         name="name"
//         className={classes.TextField}
//         label="Name"
//         fullWidth={true}
//         variant="outlined"
//         value={PostNew.name}
//         onChange={(e) => setPostNew({ ...PostNew, name: e.target.value })}
//       />
//       <TextField
//         type="number"
//         name="quantity"
//         className={classes.TextField}
//         label="Quantity"
//         fullWidth={true}
//         variant="outlined"
//         value={PostNew.quantity}
//         onChange={(e) => setPostNew({ ...PostNew, quantity: e.target.value })}
//       />
//       <TextField
//         type="number"
//         name="price"
//         className={classes.TextField}
//         label="Price"
//         fullWidth={true}
//         variant="outlined"
//         value={PostNew.price}
//         onChange={(e) => setPostNew({ ...PostNew, price: e.target.value })}
//       />
//       <TextField
//         type="text"
//         name="status"
//         fullWidth={true}
//         className={classes.TextField}
//         label="status"
//         variant="outlined"
//         value={PostNew.status}
//         onChange={(e) => setPostNew({ ...PostNew, status: e.target.value })}
//       />
//       {title==="Update Product"? (
//         ""
//       ) : (
//         <Button
//           variant="contained"
//           color="default"
//           component="label"
//           startIcon={<CloudUploadIcon />}
//         >
//           Upload
//           <input
//             type="file"
//             name="productImage"
//             onChange={(e) =>
//               setPostNew({ ...PostNew, productImage: e.target.files[0] })
//             }
//             hidden
//           />
//         </Button>
//       )}

//       <Button
//         className={classes.button}
//         color="primary"
//         variant="contained"
//         type="submit"
//         fullWidth
//       >
//         submit
//       </Button>
//     </form>
//   );
// };

// export default FormProucts;
