import React ,{ useEffect}from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {Paper,Avatar} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { getusers, deleteuser } from "../redux/actions/actionUser";

export default function CollapsibleTable({Data}) { 
  const dispatch = useDispatch();
  const token=JSON.parse(localStorage.getItem("profile"))
  const user= token.result.role
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  const users = useSelector((state) => state.users.many);
  return (
    <>
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
              {users&&users.map((row, index) => (
                <TableRow key={index}>
                  <TableCell> {index + 1} </TableCell>
                  <TableCell>
                    <Avatar src={row.imageUrl} />
                  </TableCell>
                  <TableCell> {row.name} </TableCell>
                  <TableCell> {row.email} </TableCell>
                  <TableCell> {row.gender} </TableCell>
                  <TableCell> {row.address} </TableCell>
                  <TableCell> {row.age} </TableCell>
                  <TableCell> {row.role} </TableCell>
                  <TableCell> {row.joined} </TableCell>
                  <TableCell>
                  {user=== row.role ?(<DeleteForeverIcon
                        color="disabled"
                      />):(<DeleteForeverIcon
                        color="secondary"
                        onClick={() => dispatch(deleteuser(row._id))}
                      />)}
                      
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}