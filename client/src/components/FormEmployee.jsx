import React,{ useState, useEffect } from 'react'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { createmployees, updateemployee } from "../redux/actions/actionEmployee";
import { makeStyles } from "@material-ui/core/styles";
import { TextField ,Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    TextField: {
      paddingBottom: theme.spacing(1),
    },
  }));

const FormProucts = ({  currentId, setcurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const post= useSelector((state) =>
    //UPDATE : get the current product using redux
    currentId ? state.employees.find((p) => p._id === currentId) : null
  );
    const [PostNew, setPostNew] = useState({fullname: "",age: "",dateNaissance: "2017-05-24",phone: "",address: "", gender: "",salary: "",EmployeeImage: "",role: "",});
      const clear = () => {
        if (currentId) {
          setcurrentId(0);
        }
        setPostNew({ fullname: "",age: "",dateNaissance: "2017-05-24",phone: "", EmployeeImage: "",address: "",gender: "",salary: "", role: "",});
        
      };
    const Handlsubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("fullname", PostNew.fullname);
        formData.append("age", PostNew.age);
        formData.append("phone", PostNew.phone);
        formData.append("dateNaissance", PostNew.dateNaissance);
        formData.append("address", PostNew.address);
        formData.append("gender", PostNew.gender);
        formData.append("salary", PostNew.salary);
        formData.append("role", PostNew.role);
        formData.append("EmployeeImage", PostNew.EmployeeImage);
        if (currentId) {
          dispatch(updateemployee(formData, currentId));
        } else {     
          dispatch(createmployees(formData));
        }
        clear();
        PostNew.EmployeeImage =e.target.reset();
      };
      useEffect(() => {
        //UPDATE : change the data of Dialog by post
        if (post) setPostNew(post);
        console.log(post);
      }, [post]);
    return (
        <form onSubmit={Handlsubmit} encType="multipart/form-data">
        <TextField
          type="text"
          name="fullname"
          className={classes.TextField}
          label="Full Name"
          fullWidth={true}
          variant="outlined"
          value={PostNew.fullname}
          onChange={(e) => setPostNew({ ...PostNew, fullname: e.target.value })}
        />
        <TextField
          type="number"
          name="phone"
          className={classes.TextField}
          label="phone"
          fullWidth={true}
          variant="outlined"
          value={PostNew.phone}
          onChange={(e) =>
            setPostNew({ ...PostNew, phone: e.target.value })
          }
        />
        <TextField
          type="number"
          name="age"
          className={classes.TextField}
          label="age"
          fullWidth={true}
          variant="outlined"
          value={PostNew.age}
          onChange={(e) =>
            setPostNew({ ...PostNew, age: e.target.value })
          }
        />
        <TextField
          type="text"
          name="address"
          fullWidth={true}
          className={classes.TextField}
          label="address"
          variant="outlined"
          value={PostNew.address}
          onChange={(e) =>
            setPostNew({ ...PostNew, address: e.target.value })
          }
        />
        <TextField
          type="text"
          name="gender"
          fullWidth={true}
          className={classes.TextField}
          label="gender"
          variant="outlined"
          value={PostNew.gender}
          onChange={(e) =>
            setPostNew({ ...PostNew, gender: e.target.value })
          }
        />
        <TextField
          type="text"
          name="role"
          fullWidth={true}
          className={classes.TextField}
          label="role"
          variant="outlined"
          value={PostNew.role}
          onChange={(e) =>
            setPostNew({ ...PostNew, role: e.target.value })
          }
        />
         <TextField
          id="date"
          label="Birthday"
          type="date"
          name="dateNaissance"
          fullWidth={true}
          className={classes.TextField}
          variant="outlined"
          value={PostNew.dateNaissance}
          onChange={(e) =>
            setPostNew({ ...PostNew, dateNaissance: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="number"
          name="salary"
          className={classes.TextField}
          label="salary"
          fullWidth={true}
          variant="outlined"
          value={PostNew.salary}
          onChange={(e) =>
            setPostNew({ ...PostNew, salary: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="default"
          component="label"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload
          <input
            type="file"
            name="productImage"
            onChange={(e) =>
              setPostNew({ ...PostNew, EmployeeImage: e.target.files[0] })
            }
            hidden
          />
        </Button>
          <Button color="primary" type="submit">
            submit
          </Button> 
      </form>
    
    )
}

export default FormProucts
