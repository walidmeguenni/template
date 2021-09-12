import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  paper: {
    marginTop: 115,
  },
  smalltitle: {
    fontWeight: 600,
    color: "#00b0ff",
  },
  bigtitle: {
    color: "#0F2137",
    fontWeight: 700,
    marginBottom: 50,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
      color:"#00b0ff",
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  fix:{
    display:"flex",
    alignItems:"center",
    marginBottom:"12px"

  },
  button1: {
    color: "white",
    backgroundColor: "#00b0ff",
    border: "2px solid #00b0ff",
    "&:hover": {
      color: "#00b0ff",
      border: "2px solid #00b0ff",
      backgroundColor: "white",
    },
  },
}));
