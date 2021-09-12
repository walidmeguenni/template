import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  Managetitle: {
    color: "#00A3FE",
    fontSize: "25px",
    padding: theme.spacing(1),
  },
}));

export default function BasicTable({ users, Data }) {
  const classes = useStyles();
  let recent = (users.length * 50) / 100;
  return (
    <>
      <TableContainer component={Paper}>
        <Typography className={classes.Managetitle}>
          Recent Subscriber
        </Typography>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {Data.map((row, index) => (
                <React.Fragment key={index}>
                  {row.status === true && (
                    <TableCell key={index}>{row.value}</TableCell>
                  )}
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((row, index) => (
                <React.Fragment key={index}>
                  {index >= recent && (
                    <TableRow>
                      {row.imageUrl && (
                        <TableCell>
                          <Avatar src={row.imageUrl} />
                        </TableCell>
                      )}

                      <TableCell>
                        {row.name ? row.name : row.fullname}
                      </TableCell>
                      <TableCell> {row.email} </TableCell>
                      <TableCell> {row.gender} </TableCell>
                      <TableCell> {row.address} </TableCell>
                      <TableCell> {row.age} </TableCell>
                      <TableCell> {row.joined} </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
