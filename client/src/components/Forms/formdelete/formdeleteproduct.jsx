import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/actionProducts";
const Formdeleteproduct = ({ currentId }) => {
  const dispatch = useDispatch();
 
  return (
    <div>
      <Box align="center">
        <Typography  gutterBottom>are sure you rmovet it</Typography>
        <Button variant="contained" color="secondary" onClick={()=>dispatch(deleteProduct(currentId))} style={{marginBottom:10}}>
          confirm
        </Button>
      </Box>
    </div>
  );
};

export default Formdeleteproduct;
