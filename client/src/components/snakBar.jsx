import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function PositionedSnackbar({msg}) {
  //const [state, setState] = React.useState(true);
 
   const  vertical='top'
   const horizontal='center'
  

//   const handleClose = () => {
//     setState(false);
//   };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        message={msg}
        key='top'
        severity="success"
      />
    </div>
  );
}
