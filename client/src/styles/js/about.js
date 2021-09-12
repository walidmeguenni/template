import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  page: {
    marginTop: theme.spacing(11),
  },
  title: {
    color: "#535461",
    fontWeight: 600,
    marginBottom:theme.spacing(2),
    marginTop:theme.spacing(1)
  },
  text: {
    color: "#65617D",
    fontSize:"15px",
    fontWeight:500    
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));
