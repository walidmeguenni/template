import React,{ useState, useEffect } from 'react'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { creatmaterails, updatematerail } from "../redux/actions/actionMaterail";
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
    const post = useSelector((state) =>
    //UPDATE : get the current product using redux
    currentId ? state.materails.find((p) => p._id === currentId) : null
  );
    const [PostNew, setPostNew] = useState({
        name: "",
        VIN: "",
        type: "",
        price:"",
        MaterailImage: "",
      });
      const clear = () => {
        if (currentId) {
          setcurrentId(0);
        }
        setPostNew({ name: "",price: "", VIN: "" ,type: "",});
        
      };
    const Handlsubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", PostNew.name);
        formData.append("price", PostNew.price);
        formData.append("type", PostNew.type);
        formData.append("VIN", PostNew.VIN);
        formData.append("MaterailImage", PostNew.MaterailImage);
        if (currentId) {
          dispatch(updatematerail(formData, currentId));
        } else {
          dispatch(creatmaterails(formData));
        }
        clear();
        PostNew.MaterailImage =e.target.reset();
      };
      useEffect(() => {
        //UPDATE : change the data of Dialog by post
        if (post) setPostNew(post);
      }, [post]);
    return (
        <form onSubmit={Handlsubmit} encType="multipart/form-data">
        <TextField
          type="text"
          name="name"
          className={classes.TextField}
          label="Name"
          fullWidth={true}
          variant="outlined"
          value={PostNew.name}
          onChange={(e) => setPostNew({ ...PostNew, name: e.target.value })}
        />
        <TextField
          type="number"
          name="VIN"
          className={classes.TextField}
          label="VIN"
          fullWidth={true}
          variant="outlined"
          value={PostNew.VIN}
          onChange={(e) =>
            setPostNew({ ...PostNew, VIN: e.target.value })
          }
        />
        <TextField
          type="number"
          name="price"
          className={classes.TextField}
          label="Price"
          fullWidth={true}
          variant="outlined"
          value={PostNew.price}
          onChange={(e) =>
            setPostNew({ ...PostNew, price: e.target.value })
          }
        />
        <TextField
          type="text"
          name="type"
          fullWidth={true}
          className={classes.TextField}
          label="type"
          variant="outlined"
          value={PostNew.type}
          onChange={(e) =>
            setPostNew({ ...PostNew, type: e.target.value })
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
            name="MaterailImage"
            onChange={(e) =>
              setPostNew({ ...PostNew, MaterailImage: e.target.files[0] })
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
