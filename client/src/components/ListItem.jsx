import React from 'react'
import {ListItemText, ListItemIcon} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        root:{
            paddingLeft:'.8em',
            fontSize:"25px",
            color:"white"
        },
        active:{
            color:"white"
        }
    }))
const ListItem = ({Icon,value}) => {
    const classes= useStyles()
    return (
        <>
            <ListItemIcon className={classes.root}>{Icon}</ListItemIcon>
            <ListItemText className={classes.active}disableTypography>{value}</ListItemText>
        </>
    )
}

export default ListItem
