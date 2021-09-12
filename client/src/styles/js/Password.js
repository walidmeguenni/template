import {makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
      },
      button: {
        paddingTop: theme.spacing(2),
        display: "flex",
        justifyContent: "flex-end ",
      },
      titlename: {
        color: "#00b0ff",
        fontSize: theme.spacing(2),
      },
      TextField: {
        paddingBottom: theme.spacing(1),
      },
}))