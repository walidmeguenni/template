import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteuser} from "../../../redux/actions/actionUser";
const Formdeleteproduct = ({ currentId, type }) => {
  const dispatch = useDispatch();
 
  return (
    <div>
      <Box align="center">
        <Typography  gutterBottom>are sure you rmovet it</Typography>
        <Button variant="contained" color="secondary" onClick={()=>dispatch(deleteuser(currentId))} style={{marginBottom:10}}>
          confirm
        </Button>
      </Box>
    </div>
  );
};

export default Formdeleteproduct;