import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { creatorders, updateorder } from "../redux/actions/actionOrders";
import { makeStyles } from "@material-ui/core/styles";
import { TextField ,Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    TextField: {
      paddingBottom: theme.spacing(1),
    },
  }));

const FormOrders = ({  currentId, setcurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const post = useSelector((state) =>
    //UPDATE : get the current product using redux
    currentId ? state.orders.find((p) => p._id === currentId) : null
  );
    const [PostNew, setPostNew] = useState({
        name: "",
        quantity: "",
      });
      const clear = () => {
        if (currentId) {
          setcurrentId(0);
        }
        setPostNew({ name: "", quantity: "",});
        
      };
    const Handlsubmit = (e) => {
        e.preventDefault();
        if (currentId) {
          dispatch(updateorder(PostNew, currentId));
        } else {
          dispatch(creatorders(PostNew));
        }
        clear();
      };
      useEffect(() => {
        //UPDATE : change the data of Dialog by post
        if (post) setPostNew(post);
      }, [post]);
    return (
        <form onSubmit={Handlsubmit} >
        <TextField
          type="text"
          name="name"
          className={classes.TextField}
          label="name"
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
          <Button color="primary" type="submit">
            submit
          </Button> 
      </form>
    )
}

export default FormOrders