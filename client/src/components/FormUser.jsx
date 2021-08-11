import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {  updateuser } from "../redux/actions/actionUser";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  TextField: {
    paddingBottom: theme.spacing(1),
  },
}));

const FormUser = ({currentId,setcurrentId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [PostNew, setPostNew] = useState({
    name: "",
    address: "",
    gender:"",
    email:"",
    age:""
  });
  const clear = () => {
    setcurrentId(0)
      setPostNew({ name: "", address: "" ,gender:"",email:"",age:""});
  };
  const Handlsubmit = (e) => {
      e.preventDefault();
      dispatch(updateuser(PostNew, currentId._id));
      clear();
  };
  useEffect(() => {
    if (currentId) setPostNew(currentId);
  }, [currentId]);
  return (
    <form onSubmit={Handlsubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <TextField
            type="text"
            name="name"
            className={classes.TextField}
            label="name"
            fullWidth
            variant="outlined"
            value={PostNew.name}
            onChange={(e) => setPostNew({ ...PostNew, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="email"
            name="email"
            className={classes.TextField}
            label="email"
            fullWidth
            variant="outlined"
            value={PostNew.email}
            onChange={(e) =>
              setPostNew({ ...PostNew, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="text"
            name="address"
            className={classes.TextField}
            label="address"
            fullWidth
            variant="outlined"
            value={PostNew.address}
            onChange={(e) =>
              setPostNew({ ...PostNew, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="number"
            name="age"
            className={classes.TextField}
            label="age"
            fullWidth
            variant="outlined"
            value={PostNew.age}
            onChange={(e) =>
              setPostNew({ ...PostNew, age: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="text"
            name="gender"
            className={classes.TextField}
            label="gender"
            fullWidth
            variant="outlined"
            value={PostNew.gender}
            onChange={(e) =>
              setPostNew({ ...PostNew, gender: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Button color="primary" type="submit">
        submit
      </Button>
    </form>
  );
};

export default FormUser;
/** const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) =>
    //UPDATE : get the current product using redux
    currentId ? state.users.find((p) => p._id === currentId) : null
  );
  const [PostNew, setPostNew] = useState({
    name: "",
    address: "",
    gender:"",
    email:"",
    age:""
  });
  const clear = () => {
      setPostNew({ name: "", address: "" ,gender:"",email:"",age:""});
  };
  const Handlsubmit = (e) => {
      e.preventDefault();
      dispatch(updateuser(PostNew, currentId));
      clear();
  };
  useEffect(() => {
    if (post) setPostNew(post);
  }, [post]);
  return (
    <form onSubmit={Handlsubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <TextField
            type="text"
            name="name"
            className={classes.TextField}
            label="name"
            fullWidth
            variant="outlined"
            value={PostNew.name}
            onChange={(e) => setPostNew({ ...PostNew, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="email"
            name="email"
            className={classes.TextField}
            label="email"
            fullWidth
            variant="outlined"
            value={PostNew.email}
            onChange={(e) =>
              setPostNew({ ...PostNew, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="text"
            name="address"
            className={classes.TextField}
            label="address"
            fullWidth
            variant="outlined"
            value={PostNew.address}
            onChange={(e) =>
              setPostNew({ ...PostNew, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="number"
            name="age"
            className={classes.TextField}
            label="age"
            fullWidth
            variant="outlined"
            value={PostNew.age}
            onChange={(e) =>
              setPostNew({ ...PostNew, age: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type="text"
            name="gender"
            className={classes.TextField}
            label="gender"
            fullWidth
            variant="outlined"
            value={PostNew.gender}
            onChange={(e) =>
              setPostNew({ ...PostNew, gender: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Button color="primary" type="submit">
        submit
      </Button>
    </form> */