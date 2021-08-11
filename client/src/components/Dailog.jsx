import React from "react";
import {Button ,Typography,makeStyles,Dialog,DialogContent,DialogTitle,useMediaQuery,useTheme}from "@material-ui/core";
import FormProucts from './FormProucts'
import FormOrders from './FormOrder'
import FormMateails from './FormMateail'
import FormEmployee from './FormEmployee'
import FormCustmor from './FormCustmor'
import FormSupplier from './FormSupplier'
import FormUser from './FormUser'
import CreateIcon from "@material-ui/icons/Create";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
const useStyles = makeStyles((theme) => ({
  left: {display: "flex",justifyContent: "flex-end",},
  button: { margin: theme.spacing(1),}
}))
export default function ResponsiveDialog({  currentId, setcurrentId,status }) {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = () => setOpen(!open);
  return (
    <div>
      <div className={classes.left}>
       {currentId === undefined ? ( <Button variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddToQueueIcon />}
          onClick={handleClick}
          >Add</Button>)
         :(<CreateIcon color="action" onClick={handleClick}/>)}
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClick}
        aria-labelledby="responsive-dialog-title" >
        <DialogTitle>
          <Typography align="center"> Producut</Typography>
        </DialogTitle>
        <DialogContent>
         <Form currentId={currentId} setcurrentId={setcurrentId} status={status}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
function Form({ currentId, status,setcurrentId }) {
  switch (status) {
    case 'product':
      return <FormProucts  currentId={currentId} setcurrentId={setcurrentId} />;
    case 'order':
      return <FormOrders  currentId={currentId} setcurrentId={setcurrentId} />;
    case 'materail':
      return <FormMateails  currentId={currentId} setcurrentId={setcurrentId} />;
    case 'employee':
      return <FormEmployee  currentId={currentId} setcurrentId={setcurrentId} />;
    case 'customer':
      return <FormCustmor  currentId={currentId} setcurrentId={setcurrentId} />;
    case 'supplier':
      return <FormSupplier  currentId={currentId} setcurrentId={setcurrentId} />;
      case 'user':
      return <FormUser  currentId={currentId} setcurrentId={setcurrentId} />;
    default:
      return null;
  }
}