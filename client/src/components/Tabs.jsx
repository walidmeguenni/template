import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab,Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TableEmployee from "./Tables/TableEmployee";
import TableCustomer from "./Tables/TableCustomer";
import TableSupplier from "./Tables/TableSupplier";
import TableUser from "./Tables/TableUser";



import {  withStyles } from '@material-ui/core';
import {SData} from '../config/Suppliers'
import {EData} from '../config/Employee'
import {CData} from '../config/Customers'
import {UData} from '../config/UserData'

const CenteredTabs = withStyles({
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})(Tabs);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center:{
    display: "flex",
    justifyContent: "center",
  }
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const token=JSON.parse(localStorage.getItem("profile"))
  const user= token.result.role==='admin'?true:false;

  return (
    <div className={classes.root}>
      <Paper square>
      <CenteredTabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
      >
        
        <Tab value="one" label="Employees" wrapped {...a11yProps("one")} />
        <Tab value="two" label="Customers" {...a11yProps("two")} />
        <Tab value="three" label="Suppliers" {...a11yProps("three")} />
        {user&&(<Tab value="four" label="User" wrapped {...a11yProps("four")} />)}
      </CenteredTabs>
      </Paper>
     <TabPanel value={value} index="one"> 
      <TableEmployee Data={EData}/>
      </TabPanel> 
      <TabPanel value={value} index="two">
        <TableCustomer Data={CData}/> 
      </TabPanel>
      <TabPanel value={value} index="three">
      <TableSupplier Data={SData}/> 
      </TabPanel>
      <TabPanel value={value} index="four">
      {user&&(<TableUser Data={UData}/>)}
      </TabPanel>
    </div>
  );
}
