import React, { useEffect, useState } from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Paper, CssBaseline, Table, TableBody } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import clsx from "clsx";
import Drawer from "../components/Drawer";
import Dailog from "../components/Dailog";
import useStyles from "../styles/js/Dashboard";
import { PData } from "../config/ProductsData";
import { useSelector, useDispatch } from "react-redux";
import { getproducts, deleteProduct } from "../redux/actions/actionProducts";
const Products = () => {
  const classes = useStyles();
  const [currentId, setcurrentId] = useState(0);
  const [content, setContent] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, [currentId, dispatch]);
  const products = useSelector((state) => state.products);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer setContent={setContent} content={content} title="Products" />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: content,
        })}
      >
        <div className={classes.toolbar} />
        <div>
          <Dailog status="product" title="ADD New Product" />
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {PData.map((row, index) => (
                  <TableCell key={index}>{row.value}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, index) => (
                <TableRow key={index}>
                  <TableCell> {index + 1} </TableCell>
                  <TableCell>
                  <div
                        onClick={() => {
                          setcurrentId(row._id);
                        }}
                      >
                    <Dailog
                      image={row.productImage}
                      status="image"
                      title="Product Image"
                      currentId={currentId}
                      setcurrentId={setcurrentId}
                    />
                    </div>
                  </TableCell>
                  <TableCell> {row.name} </TableCell>
                  <TableCell> {row.quantity} </TableCell>
                  <TableCell> {row.price} </TableCell>
                  <TableCell> {row.quantity * row.price} </TableCell>
                  <TableCell> {row.joined} </TableCell>
                  <TableCell> {row.status} </TableCell>
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
                          status="product"
                          title="Update Product"

                        />
                      </div >
                      <div
                        onClick={() => {
                          setcurrentId(row._id);
                        }}
                      >
                        <Dailog
                          currentId={currentId}
                          setcurrentId={setcurrentId}
                          status="deleteproduct"
                          title="Delete Product"
                          del={true}
                          type="product"
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
  );
};
export { Products };
