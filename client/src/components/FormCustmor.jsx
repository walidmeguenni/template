import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { creatcustomers, updatecustomer } from "../redux/actions/actionCustomer";
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
    currentId ? state.customers.find((p) => p._id === currentId) : null
  );
  const [PostNew, setPostNew] = useState({fullname: "",email:"",age:"",phone: "",address: "", gender: ""});

      const clear = () => {
        if (currentId) {
          setcurrentId(0);
        }
        setPostNew({fullname: "",email:"",age:"",phone: "",address: "", gender: ""});
        
      };
    const Handlsubmit = (e) => {
        e.preventDefault();
        if (currentId) {
          dispatch(updatecustomer(PostNew, currentId));
        } else {
          dispatch(creatcustomers(PostNew));
        }
        clear();
      };
      useEffect(() => {
        //UPDATE : change the data of Dialog by post
        if (post) setPostNew(post);
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
        type="email"
        name="email"
        className={classes.TextField}
        label="Email"
        fullWidth={true}
        variant="outlined"
        value={PostNew.email}
        onChange={(e) => setPostNew({ ...PostNew, email: e.target.value })}
      />
      <TextField
        type="text"
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
        <Button color="primary" type="submit">
          submit
        </Button> 
    </form>
  
    )
}
export default FormOrders