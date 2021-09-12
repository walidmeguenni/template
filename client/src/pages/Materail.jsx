import React, { useEffect, useState } from "react";
import { TableCell ,TableContainer, TableHead,TableRow } from "@material-ui/core";
import { Paper,CssBaseline,Table,TableBody,} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import clsx from "clsx";
import Drawer from '../components/Drawer'
import Dailog from "../components/Dailog";
import useStyles from "../styles/js/Dashboard";
import { MData } from "../config/MaterileData";
import { useSelector, useDispatch } from "react-redux";
import { getmaterails, deletematerail } from "../redux/actions/actionMaterail";
const Materail = () => {
  const classes = useStyles();
  const [currentId, setcurrentId] = useState(0);
  const [content, setContent] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmaterails());
  }, [currentId, dispatch]);
  const products = useSelector((state) => state.materails);
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Drawer setContent={setContent} content={content}title="Materials"/>
  
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: content,
          })}
        >
          <div className={classes.toolbar} />
          <div>
          <Dailog status='materail' title="ADD New Material"/>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {MData.map((row, index) => (
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
                   image={row.MaterailImage}
                   currentId={currentId}
                   setcurrentId={setcurrentId} 
                   status="materailimage" 
                   title="Materail Image"/>
                   </div>
                  </TableCell>
                  <TableCell> {row.name} </TableCell>
                  <TableCell> {row.VIN} </TableCell>
                  <TableCell> {row.price} </TableCell>
                  <TableCell> {row.type} </TableCell>
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
                          status='materail'
                          title="Update Material"
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
                          status="deletematerial"
                          title="Delete Matreial"
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
export  {Materail}
