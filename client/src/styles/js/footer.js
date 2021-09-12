import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    background:"#00b0ff",
    // color:"white"
  },
  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color:"white",

    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
