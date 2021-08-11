import React from 'react'
import {ListItemText, ListItemIcon} from "@material-ui/core";
const ListItem = ({icon,value}) => {
    return (
        <>
            <ListItemIcon style={{
                paddingLeft:'.8em'
            }}>{icon}</ListItemIcon>
            <ListItemText disableTypography>{value}</ListItemText>
        </>
    )
}

export default ListItem
