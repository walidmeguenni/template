import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { getuser, updateimageuser } from "../redux/actions/actionUser";
import Dailog from "./Dailog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: theme.spacing(1),
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    position: "relative",
  },
  iconButton: {
    position: "absolute",
    bottom: 0,
    right: -25,
  },
  card: {
    padding: theme.spacing(2),
  },
  fix: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Demo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [picture, setpicture] = useState({ imageUrl: null });
  const token = JSON.parse(localStorage.getItem("profile"));
  const [currentId, setcurrentId] = useState(0);

  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("imageUrl", picture.imageUrl);
    dispatch(updateimageuser(formData, token.result._id));
    setpicture({ imageUrl: null });
  };
  const user = useSelector((state) => state.users.one);
  useEffect(() => {
    dispatch(getuser(token.result._id));
  }, [dispatch, token.result._id]);
  return (
    <Card className={classes.card}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Card className={classes.root}>
            <form onSubmit={handleUpload} encType="multipart/form-data">
              <div className="responsiveImg">
                <label htmlFor="file-input">
                  <img className={classes.img} src={user&&user.imageUrl} alt="" />
                </label>
                <input
                  name="imageUrl"
                  type="file"
                  id="file-input"
                  onChange={(e) =>
                    setpicture({ ...picture, imageUrl: e.target.files[0] })
                  }
                />
              </div>
              <div className="responsiveImg">
                {picture.imageUrl && (
                  <Button type="submit" color="primary">
                    save
                  </Button>
                )}
              </div>
              <Typography align="center">{user&&user.name}</Typography>
            </form>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Card className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <input
                  className={classes.TextField}
                  defaultValue={user&&user.name}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <input
                  className={classes.TextField}
                  defaultValue={user&&user.email}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <input
                  className={classes.TextField}
                  defaultValue={user&&user.gender}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <input
                    className={classes.TextField}
                    defaultValue={user&&user.address}
                  />
              </Grid>
              <Grid item xs={12} lg={6}>
                <input
                  className={classes.TextField}
                  defaultValue={user&&user.age}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <input
                  className={classes.TextField}
                  defaultValue={user&&user.joined}
                />
              </Grid>
            </Grid>
            <div className={classes.button}>
              <Button variant="contained" color="primary" size="small">
                <div
                  onClick={() => {
                    setcurrentId(user);
                  }}
                >
                  <Dailog
                    currentId={currentId}
                    setcurrentId={setcurrentId}
                    status="user"
                  />
                </div>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Demo;

