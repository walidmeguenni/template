import React, { useEffect } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { creatmaterails, updatematerail } from "../../../redux/actions/actionMaterail";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { validationSchema, updatevalidationSchema } from "../../../validations/MaterialValidation";
import useStyles from "../../../styles/js/Form";
const initialvalue = { name: "", VIN: "", type: "", price: "", MaterailImage: "", };
const FormMaterials = ({ currentId, setcurrentId, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
  currentId ? state.materails.find((p) => p._id === currentId) : null
);
  const Edit = title === "Update Material" ? true : false;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: Edit ? updatevalidationSchema : validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
     if (currentId) {
       dispatch(updatematerail(values, currentId));
       setcurrentId(0);
      } else {
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("VIN", values.VIN);
      formData.append("type", values.type);
      formData.append("MaterailImage", values.MaterailImage);
      dispatch(creatmaterails(formData));
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
      <TextField type="number" name="VIN" className={classes.TextField} label="VIN" fullWidth={true} variant="outlined" value={formik.values.VIN} onChange={formik.handleChange} error={formik.touched.VIN && Boolean(formik.errors.VIN)} helperText={formik.touched.VIN && formik.errors.VIN} />
      <TextField type="number" name="price" className={classes.TextField} label="Price" fullWidth={true} variant="outlined" value={formik.values.price} onChange={formik.handleChange} error={formik.touched.price && Boolean(formik.errors.price)} helperText={formik.touched.price && formik.errors.price} />
      <TextField type="text" name="type" fullWidth={true} className={classes.TextField} label="type" variant="outlined" value={formik.values.type} onChange={formik.handleChange} error={formik.touched.type && Boolean(formik.errors.type)} helperText={formik.touched.type && formik.errors.type} />
      {Edit ? ( "" ) : (
        <div>
          <Button variant="contained" color="default" component="label" startIcon={<CloudUploadIcon />} >
            Upload
            <input type="file" accept="image/*" name="MaterailImage" id="MaterailImage" onChange={(event) => { formik.setFieldValue("MaterailImage", event.target.files[0]); }} hidden />
          </Button>
          {formik.touched.MaterailImage && formik.errors.MaterailImage ? (
            <div className={classes.errors}>{formik.errors.MaterailImage}</div>
          ) : null}
        </div>
      )}
      <Button className={classes.button}color="primary"variant="contained"type="submit"fullWidth>
       {Edit?"UPDATE":"CREATE"}
      </Button>
    </form>
  );
};
export default FormMaterials;


// import React,{ useState, useEffect } from 'react'
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { useDispatch, useSelector } from "react-redux";
// import { creatmaterails, updatematerail } from "../../../redux/actions/actionMaterail";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField ,Button} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     TextField: {
//       paddingBottom: theme.spacing(1),
//     },
//     button: {
//       marginTop: theme.spacing(1),
//     },
//   }));

// const FormProucts = ({  currentId, setcurrentId,title }) => {
//     const dispatch = useDispatch();
//     const classes = useStyles();
//     const post = useSelector((state) =>
//     //UPDATE : get the current product using redux
//     currentId ? state.materails.find((p) => p._id === currentId) : null
//   );
//     const [PostNew, setPostNew] = useState({
//         name: "",
//         VIN: "",
//         type: "",
//         price:"",
//         MaterailImage: "",
//       });
//       const clear = () => {
//         if (currentId) {
//           setcurrentId(0);
//         }
//         setPostNew({ name: "",price: "", VIN: "" ,type: "",});
        
//       };
//     const Handlsubmit = (e) => {
//         e.preventDefault();
//         let formData = new FormData();
//         formData.append("name", PostNew.name);
//         formData.append("price", PostNew.price);
//         formData.append("type", PostNew.type);
//         formData.append("VIN", PostNew.VIN);
//         formData.append("MaterailImage", PostNew.MaterailImage);
//         if (currentId) {
//           dispatch(updatematerail(PostNew, currentId));
//         } else {
//           dispatch(creatmaterails(formData));
//         }
//         clear();
//         PostNew.MaterailImage =e.target.reset();
//       };
//       useEffect(() => {
//         //UPDATE : change the data of Dialog by post
//         if (post) setPostNew(post);
//       }, [post]);
//     return (
//         <form onSubmit={Handlsubmit} >
//         <TextField
//           type="text"
//           name="name"
//           className={classes.TextField}
//           label="Name"
//           fullWidth={true}
//           variant="outlined"
//           value={PostNew.name}
//           onChange={(e) => setPostNew({ ...PostNew, name: e.target.value })}
//         />
//         <TextField
//           type="number"
//           name="VIN"
//           className={classes.TextField}
//           label="VIN"
//           fullWidth={true}
//           variant="outlined"
//           value={PostNew.VIN}
//           onChange={(e) =>
//             setPostNew({ ...PostNew, VIN: e.target.value })
//           }
//         />
//         <TextField
//           type="number"
//           name="price"
//           className={classes.TextField}
//           label="Price"
//           fullWidth={true}
//           variant="outlined"
//           value={PostNew.price}
//           onChange={(e) =>
//             setPostNew({ ...PostNew, price: e.target.value })
//           }
//         />
//         <TextField
//           type="text"
//           name="type"
//           fullWidth={true}
//           className={classes.TextField}
//           label="type"
//           variant="outlined"
//           value={PostNew.type}
//           onChange={(e) =>
//             setPostNew({ ...PostNew, type: e.target.value })
//           }
//         />
//          {title==="Update Material"? (
//         ""
//       ) : (
//         <Button
//         variant="contained"
//         color="default"
//         component="label"
//         className={classes.button}
//         startIcon={<CloudUploadIcon />}
//       >
//         Upload
//         <input
//           type="file"
//           name="MaterailImage"
//           onChange={(e) =>
//             setPostNew({ ...PostNew, MaterailImage: e.target.files[0] })
//           }
//           hidden
//         />
//       </Button>
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
//       </form>
//     )
// }

// export default FormProucts
