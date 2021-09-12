import React from "react";
import {
  Button,
  Typography,
  makeStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
  Avatar,
  IconButton,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import CloseIcon from "@material-ui/icons/Close";
import FormProucts from "./Forms/FormContent/FormProucts";
import FormOrders from "./Forms/FormContent/FormOrder";
import FormMateails from "./Forms/FormContent/FormMateail";
import FormEmployee from "./Forms/FormContent/FormEmployee";
import FormCustmor from "./Forms/FormContent/FormCustmor";
import FormSupplier from "./Forms/FormContent/FormSupplier";
import FormUser from "./Forms/FormContent/FormUser";
import ImageCard from "./Forms/FormImage/imageCard";
import EmployeeImage from "./Forms/FormImage/employeeImage";
import MaterailImage from "./Forms/FormImage/materailImage";
import UserImage from "./Forms/FormImage/userImage";
import Productdelete from "./Forms/formdelete/formdeleteproduct";
import Materaildelete from "./Forms/formdelete/formdeletematerial";
import Orderdelete from "./Forms/formdelete/formdeleteorders";
import Employeedelete from "./Forms/formdelete/formdeleteempolyee";
import Customerdelete from "./Forms/formdelete/formdeletecustomer";
import Suppliersdelete from "./Forms/formdelete/formdeletesuppliers";
import Userdelete from "./Forms/formdelete/formdeleteuser";
import CreateIcon from "@material-ui/icons/Create";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
const useStyles = makeStyles((theme) => ({
  left: { display: "flex", justifyContent: "flex-end" },
  button: { margin: theme.spacing(1) },
  FlexTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  font: {
    color: "blue",
    fontFamily: "Fira Code",
  },
}));
export default function ResponsiveDialog({
  currentId,
  setcurrentId,
  status,
  image,
  title,
  del,
  type
}) {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const handleClick = () => setOpen(!open);
  console.log(del);
  return (
    <div>
      {image === undefined ? (
        currentId !== undefined ? (
          del === true ? (
            <DeleteForeverIcon color="secondary" onClick={handleClick} />
          ) : (
            <CreateIcon color="action" onClick={handleClick} />
          )
        ) : (
          <div className={classes.left}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddToQueueIcon />}
              onClick={handleClick}
            >
              Add
            </Button>
          </div>
        )
      ) : (
        <Avatar onClick={handleClick} src={image} />
      )}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClick}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>
          <div className={classes.FlexTitle}>
            <div>
              <Typography variant="h6" className={classes.font}>
                {title}
              </Typography>
            </div>
            <div>
              <Typography>
                <IconButton
                  color="primary"
                  onClick={handleClick}
                  style={{
                    marginTop: "2px",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Typography>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <Form
            currentId={currentId}
            setcurrentId={setcurrentId}
            status={status}
            title={title}
            image={image}
            type={type}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
function Form({ currentId, status, setcurrentId, title, image,type }) {
  switch (status) {
    case "product":
      return (
        <FormProucts
          currentId={currentId}
          setcurrentId={setcurrentId}
          title={title}
        />
      );
    case "order":
      return <FormOrders currentId={currentId} setcurrentId={setcurrentId} />;
    case "materail":
      return (
        <FormMateails
          currentId={currentId}
          setcurrentId={setcurrentId}
          title={title}
        />
      );
    case "employee":
      return (
        <FormEmployee
          currentId={currentId}
          setcurrentId={setcurrentId}
          title={title}
        />
      );
    case "customer":
      return (
        <FormCustmor
          currentId={currentId}
          setcurrentId={setcurrentId}
          title={title}
        />
      );
    case "supplier":
      return <FormSupplier currentId={currentId} setcurrentId={setcurrentId} />;
    case "user":
      return (
        <FormUser
          currentId={currentId}
          setcurrentId={setcurrentId}
          title={title}
        />
      );
    case "image":
      return <ImageCard currentId={currentId} />;
    case "employeeimage":
      return <EmployeeImage currentId={currentId} />;
    case "materailimage":
      return <MaterailImage currentId={currentId} />;
    case "deleteproduct":
      return <Productdelete currentId={currentId} type={type}/>;
      case "deletematerial":
      return <Materaildelete currentId={currentId} type={type}/>;
      case "deleteorder":
      return <Orderdelete currentId={currentId} type={type}/>;
      case "deleteempolyee":
        return <Employeedelete currentId={currentId} type={type}/>;
        case "deletecustomer":
        return <Customerdelete currentId={currentId} type={type}/>;
        case "deletesupplier":
        return <Suppliersdelete currentId={currentId} type={type}/>;
        case "deleteuser":
          return <Userdelete currentId={currentId} type={type}/>;
    case "imageuser":
      return <UserImage image={image} />;
    default:
      return null;
  }
}
