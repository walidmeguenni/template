import React ,{ useEffect, useState}from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {Paper} from "@material-ui/core";
import Dailog from "../Dailog";

import { useSelector, useDispatch } from "react-redux";
import { getemployees, deleteemployee } from "../../redux/actions/actionEmployee";

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
          <Dailog status='employee' title="ADD New Employee"/>
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
                  <div
                        onClick={() => {
                          setcurrentId(row._id);
                        }}
                      >
                  <Dailog 
                  image={row.EmployeeImage} 
                      currentId={currentId}
                      setcurrentId={setcurrentId}
                      status="employeeimage" 
                      title="Employee Image"/>
                 </div>
                  </TableCell>
                  <TableCell> {row.fullname} </TableCell>
                  <TableCell> 0{row.phone} </TableCell>
                  <TableCell> {row.address} </TableCell>
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
                          title="Update Employee"
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
                          status="deleteempolyee"
                          title="Delete Employee"
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
    </>
  );
}