import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontWeight: 600,
    color: "#535461",
    marginTop: theme.spacing(8),
  },
  cards: {
    marginTop: theme.spacing(8),
  },
  card: {
    border: "none",
    boxShadow: "none",
    
  },
  cardcontent: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
    
  },
  content: {
    color:"#343D48",
    fontSize:"14px"
  }
}));
