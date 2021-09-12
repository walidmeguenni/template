import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    minHeight: "700px",
    background: "#00b0ff",
    marginTop: theme.spacing(8),
  },
  smalltitle: {
    paddingTop: 65,
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "2.1px",
    textTransform: " uppercase",
    color: "#ffffff",
  },
  title: {
    paddingTop: 4,
    fontSize: "36px",
    fontWeight: 700,
    letterSpacing: "2.1px",
    color: "#ffffff",
  },
  grid: {
    marginTop: theme.spacing(8),
  },
  icontitle: {
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "155%",
    color: "#FFFFFF",
  },
  content: {
    fontSize: "14px",
    color: "#FFFFFF",
    padding: theme.spacing(2),
  },
  button1: {
    color: "#fff",
    backgroundColor: "#00b0ff",
    borderRadius: 6,
    border: "2px solid #fff",
    "&:hover": {
      backgroundColor: "#00b0ff",
    },
  },
}));
