import React from "react";

import {
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const Menu = ({open}) => {
  return (
    <div>
        <Divider />
        <List>
        <div>
          {["Inbox", "Starred", "Send email", "Drafts"].map((value, index) => (
              <ListItem href="#" button key={value}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
                </ListItemIcon>
                <ListItemText>{value}</ListItemText>
              </ListItem>
          ))}
          </div>
        </List>
        <Divider />
        <List>
        <div>
          {["Inbox", "Starred", "Send email", "Drafts"].map((value, index) => (
              <ListItem href='#' button key={value}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
                </ListItemIcon>
                <ListItemText>{value}</ListItemText>
              </ListItem>
          ))}
        </div>
        </List>
    </div>
  );
};


export default Menu;
