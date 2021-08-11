import React, { useEffect ,useState} from "react";
import { TextField, Card, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../redux/actions/actionUser";
import Dailog from "./Dailog";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(3),
  },
  TextField: {
    padding: theme.spacing(0),
    backgroundColor: theme.palette.white,
  },
  button: {
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end ",
  },
}));
const Tq = ({user}) => {
  const classes = useStyles();
  const [currentId, setcurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.users);
  // useEffect(() => {
  //   dispatch(getuser(currentId));
  // }, [dispatch,currentId]); 
  return (
    <Card className={classes.card}>
      <form noValidate autoComplete="off"> 
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      className={classes.TextField}
                      label="Name"
                      value={user.name}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      className={classes.TextField}
                      label="Email"
                      defaultValue={user.email}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      className={classes.TextField}
                      label="Gender"
                      defaultValue={user.gender}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      className={classes.TextField}
                      label="Address"
                      defaultValue={user.address}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      className={classes.TextField}
                      label="Age"
                      defaultValue={user.age}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      className={classes.TextField}
                      label="Joined"
                      defaultValue={user.joined}
                      variant="outlined"
                      disabled
                      fullWidth
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
              </div>
      </form>
    </Card>
 
 );
};

export default Tq;
