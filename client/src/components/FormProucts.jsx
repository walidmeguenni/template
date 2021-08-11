import React,{ useState, useEffect } from 'react'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { creatproducts, updateProduct } from "../redux/actions/actionProducts";
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
    currentId ? state.products.find((p) => p._id === currentId) : null
  );
    const [PostNew, setPostNew] = useState({
        name: "",
        quantity: "",
        price: "",
        status: "",
        productImage: "",
      });
      const clear = () => {
        if (currentId) {
          setcurrentId(0);
        }
        setPostNew({ name: "", quantity: "", price: "", status: "" });
        
      };
    const Handlsubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", PostNew.name);
        formData.append("price", PostNew.price);
        formData.append("quantity", PostNew.quantity);
        formData.append("status", PostNew.status);
        formData.append("productImage", PostNew.productImage);
        if (currentId) {
          dispatch(updateProduct(formData, currentId));
        } else {
          dispatch(creatproducts(formData));
        }
        clear();
        PostNew.productImage =e.target.reset();
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
          name="quantity"
          className={classes.TextField}
          label="Quantity"
          fullWidth={true}
          variant="outlined"
          value={PostNew.quantity}
          onChange={(e) =>
            setPostNew({ ...PostNew, quantity: e.target.value })
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
          name="status"
          fullWidth={true}
          className={classes.TextField}
          label="status"
          variant="outlined"
          value={PostNew.status}
          onChange={(e) =>
            setPostNew({ ...PostNew, status: e.target.value })
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
              setPostNew({ ...PostNew, productImage: e.target.files[0] })
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
