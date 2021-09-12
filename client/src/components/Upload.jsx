import React, { useState, useEffect } from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { getusers, updateimageuser } from "../redux/actions/actionUser";
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
  button: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  card1: {
    height: theme.spacing(8),
    padding: theme.spacing(3),
    color: "#c6cacc",
    fontSize: theme.spacing(2),
  },
  titlename: {
    color: "#c6cacc",
    fontSize: theme.spacing(2),
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
  const user = useSelector((state) =>
    //UPDATE : get the current product using redux
    token.result._id
      ? state.users.find((p) => p._id === token.result._id)
      : null
  );
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  return (
    <Card className={classes.card}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Card className={classes.root}>
            <form onSubmit={handleUpload} encType="multipart/form-data">
              <div className="responsiveImg">
                <label htmlFor="file-input">
                  <img
                    className={classes.img}
                    src={user && user.imageUrl}
                    alt=""
                  />
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
              <Typography className={classes.titlename} align="center">
                {user && user.name}
              </Typography>
            </form>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Card className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Card className={classes.card1}>{user && user.name}</Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card className={classes.card1}>{user && user.email}</Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card className={classes.card1}>{user && user.gender}</Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card className={classes.card1}>{user && user.address}</Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card className={classes.card1}>{user && user.age}</Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card className={classes.card1}>{user && user.joined}</Card>
              </Grid>
            </Grid>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="inherit"
                size="small"
                onClick={() => {
                  setcurrentId(user);
                }}
              >
                <Dailog
                  currentId={currentId}
                  setcurrentId={setcurrentId}
                  status="user"
                  title="Upadte User Info"
                />
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Demo;
