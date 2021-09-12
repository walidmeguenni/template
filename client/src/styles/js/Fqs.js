import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  smalltitle: {
    fontWeight: 600,
    marginBottom: 50,
    color: "#0F2137",
  },
  bigtitle: {
    fontWeight: 700,
    marginTop: 50,
    color: "#00b0ff",
  },
  root: {
    marginBottom: 10,
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
}));
