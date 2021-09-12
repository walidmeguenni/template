import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Paper } from "@material-ui/core";

import Dailog from "../Dailog";

import { useSelector, useDispatch } from "react-redux";
import { getusers } from "../../redux/actions/actionUser";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { useLocation} from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
export default function CollapsibleTable(props) {
  const {Data}=props;
  const dispatch = useDispatch();
  const location = useLocation();
  
  const [currentId, setcurrentId] = useState(0);

  const token = JSON.parse(localStorage.getItem("profile"));
  const user = token.result.role;
  
  useEffect(() => {
    setInterval(dispatch(getusers()), 500);
    dispatch(getusers());
  }, [dispatch,location])
  const users = useSelector((state) => state.users);
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
            {users &&
              users.map((row, index) => (
                <TableRow key={index}>
                  <TableCell> {index + 1} </TableCell>
                  <TableCell>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant={row.active&&"dot"}
                    >
                      <Dailog
                        image={row.imageUrl}
                        status="imageuser"
                        title="User Profile"
                      />
                    </StyledBadge>
                  </TableCell>
                  <TableCell> {row.name} </TableCell>
                  <TableCell> {row.email} </TableCell>
                  <TableCell> {row.gender} </TableCell>
                  <TableCell> {row.address} </TableCell>
                  <TableCell> {row.age} </TableCell>
                  <TableCell> {row.role} </TableCell>
                  <TableCell> {row.joined} </TableCell>
                  <TableCell>
                    {user === row.role ? (
                      <DeleteForeverIcon color="disabled" />
                    ) : (
                      <div
                        onClick={() => {
                          setcurrentId(row._id);
                        }}
                      >
                        <Dailog
                          currentId={currentId}
                          setcurrentId={setcurrentId}
                          status="deleteuser"
                          title="Delete User"
                          del={true}
                        />
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
