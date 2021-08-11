import React ,{ useEffect, useState}from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {Paper,Avatar} from "@material-ui/core";
import Dailog from "./Dailog";

import { useSelector, useDispatch } from "react-redux";
import { getemployees, deleteemployee } from "../redux/actions/actionEmployee";

export default function CollapsibleTable({Data}) { 
  const [currentId, setcurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getemployees());
  }, [currentId, dispatch]);
  const employees = useSelector((state) => state.employees);
  return (
    <>
      <div>
          <Dailog status='employee'/>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {Data.map((row, index) => (
                  <TableCell key={index}>{row.value}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row, index) => (
                <TableRow key={index}>
                  <TableCell> {index + 1} </TableCell>
                  <TableCell>
                    <Avatar src={row.EmployeeImage} />
                  </TableCell>
                  <TableCell> {row.fullname} </TableCell>
                  <TableCell> {row.phone} </TableCell>
                  <TableCell> {row.address} </TableCell>
                  <TableCell> {row.age} </TableCell>
                  <TableCell> {row.gender} </TableCell>
                  <TableCell> {row.dateNaissance} </TableCell>
                  <TableCell> {row.salary} </TableCell>
                  <TableCell> {row.role} </TableCell>
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
                          status='employee'
                        />
                      </div>
                      <DeleteForeverIcon
                        color="secondary"
                        onClick={() => dispatch(deleteemployee(row._id))}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}