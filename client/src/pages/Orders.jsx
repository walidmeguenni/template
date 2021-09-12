import React, { useEffect, useState } from "react";
import { TableCell ,TableContainer, TableHead,TableRow } from "@material-ui/core";
import { Paper,CssBaseline,Table,TableBody,} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import clsx from "clsx";
import Drawer from '../components/Drawer'
import Dailog from "../components/Dailog";
import useStyles from "../styles/js/Dashboard";
import { OData } from "../config/OrderData";
import { useSelector, useDispatch } from "react-redux";
import { getorders, deleteorder } from "../redux/actions/actionOrders";
const Orders = () => {
  const classes = useStyles();
  const [currentId, setcurrentId] = useState(0);
  const [content, setContent] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorders());
  }, [currentId, dispatch]);
  const orders = useSelector((state) => state.orders);
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Drawer  setContent={setContent} content={content} title="Orders"/>
  
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: content,
          })}
        >
          <div className={classes.toolbar} />
          <div>
          <Dailog status='order' title="ADD New Order"/>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {OData.map((row, index) => (
                  <TableCell key={index}>{row.value}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row, index) => (
                <TableRow key={index}>
                  <TableCell> {index + 1} </TableCell>
                  <TableCell> {row.name} </TableCell>
                  <TableCell> {row.products} </TableCell>
                  <TableCell> {row.totaleprice} </TableCell>
                  <TableCell> {row.joined} </TableCell>
                  <TableCell>
                    <div style={{ display: "flex" }}>
                      <div
                        onClick={() => {
                          setcurrentId(row._id);
                        }}
                      >
                        <Dailog
                          currentId={currentId}
                          setcurrentId={setcurrentId}
                          status='order'
                          title="Update Order"
                        />
                      </div>
                      <div
                        onClick={() => {
                          setcurrentId(row._id);
                        }}
                      >
                        <Dailog
                          currentId={currentId}
                          setcurrentId={setcurrentId}
                          status="deleteorder"
                          title="Delete Order"
                          del={true}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </main>
        </div>
    )
}
export  {Orders}