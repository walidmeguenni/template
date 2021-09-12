import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  smalltitle: {
    fontWeight: 600,
    color: "#00b0ff",
  },
  bigtitle: {
    color: "#0F2137",
    fontWeight: 700,
    marginBottom: 50,
  },
  rate: {
    padding: theme.spacing(2),
    "& .MuiRating-iconFilled": {
      color: "#00b0ff",
    },
  },
  title: {
    "& .MuiCardHeader-subheader": {
      color: "#00b0ff",
    },
  },
}));
