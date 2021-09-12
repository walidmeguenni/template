import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    TextField: {
        paddingBottom: theme.spacing(1),
      },
      button: {
        marginTop: theme.spacing(1),
      },
      errors: {
        color: "#f44336",
        margin: "3px 0px   0px 14px",
        fontSize: "0.75rem",
        textAlign: "left",
        fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: " 0.03333em",
      },
}))