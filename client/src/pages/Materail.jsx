import React, { useEffect, useState, useCallback } from "react";
import { TableCell ,TableContainer, TableHead,TableRow } from "@material-ui/core";
import { Paper, Avatar,CssBaseline,Table,TableBody,} from "@material-ui/core";
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
  const [open, setopen] = useState(false);
  const [currentId, setcurrentId] = useState(0);
  const callback = useCallback(async () => {
    try {
      await setopen(!open);
    } catch (error) {
      console.log(error);
    }
  }, [open]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmaterails());
  }, [currentId, dispatch]);
  const products = useSelector((state) => state.materails);
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Drawer Callback={callback} />
  
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: !open,
          })}
        >
          <div className={classes.toolbar} />
          <div>
          <Dailog status='materail'/>
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
                    <Avatar src={row.MaterailImage} />
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
                        />
                      </div>
                      <DeleteForeverIcon
                        color="secondary"
                        onClick={() => dispatch(deletematerail(row._id))}
                      />
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
