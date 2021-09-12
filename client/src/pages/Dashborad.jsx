import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Grid, Card, CardContent, Paper } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import Drawer from "../components/Drawer";
import useStyles from "../styles/js/Dashboard";
import TableIntro from "../components/Tables/tableintro";
import Chart from "../components/Chart";
import PersonalInfo from "../components/personalInfo";
import CardValue from "../components/Cardvalue";
import { getproducts } from "../redux/actions/actionProducts";
import { getusers } from "../redux/actions/actionUser";
import { getcustomers } from "../redux/actions/actionCustomer";
import { getemployees } from "../redux/actions/actionEmployee";

import { getorders } from "../redux/actions/actionOrders";
import { UData } from "../config/UserData";
import { CData } from "../config/Customers";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "../config/TitleData";
const Dashborad = () => {
  const classes = useStyles();
 
  const role = JSON.parse(localStorage.getItem("profile"));
  const products = useSelector((state) => state.products.length);
  const users = useSelector((state) => state.users);
  const costumers = useSelector((state) => state.customers);
  const orders = useSelector((state) => state.orders.length);
  const employee = useSelector((state) => state.employees.length);
  
  
  const USER=role.result.role==="admin"?users.length:employee

  const count = [USER, products, orders, costumers.length];
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [content, setContent] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
    dispatch(getcustomers());
    dispatch(getusers());
    dispatch(getorders());
    dispatch(getemployees());

  }, [dispatch]);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer setContent={setContent} content={content} title="Dashboard" />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: content,
        })}
      >
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          {Title.map((val, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <Card className={classes.card} variant="elevation">
                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div >
                    <CardValue value={count[index]} />
                    <CardValue value={val.title} />
                  </div>
                  <div>
                    <img src={val.image} alt="" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} md={7} lg={8}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Paper className={fixedHeightPaper}>
              <PersonalInfo />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {role.result.role === "admin" ? (
              <Paper className={classes.paper}>
                <TableIntro users={users} Data={UData} />{" "}
              </Paper>
            ) : (
              <Paper className={classes.paper}>
                <TableIntro users={costumers} Data={CData} />{" "}
              </Paper>
            )}
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
export { Dashborad };
