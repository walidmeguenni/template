import React, { useState } from "react";
import { Card, Grid, Button, TextField, makeStyles } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatepassword } from "../redux/actions/authAction";
const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(3),
  },
  button: {
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end ",
  },
}));
const Password = () => {
  const token = JSON.parse(localStorage.getItem("profile"));
  const [PostNew, setPostNew] = useState({
    password: "",
    confirmPassword: "",
    newPassword: "",
  });
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const clear = () => {
    setPostNew({ password: "", confirmPassword: "", newPassword: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatepassword(PostNew, history, token.result._id));
    clear();
  };
  return (
    <Card className={classes.card}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setPostNew({ ...PostNew, password: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <TextField
              name="confirmPassword"
              label="Repeat Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setPostNew({ ...PostNew,confirmPassword: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              name="newPassword"
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setPostNew({ ...PostNew, newPassword: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Password;
