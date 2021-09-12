import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import StorefrontIcon from "@material-ui/icons/Storefront";
import BuildIcon from "@material-ui/icons/Build";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const SideBarData= [
    {
    value: "Dashboard",
    icon: <DashboardTwoToneIcon/>,
    link:'/Dashboard'
  },
  {
    value: "Prodcuts",
    icon: <StorefrontIcon />,
    link:'/Prodcuts'
  },
  {
    value: "Material",
    icon: <BuildIcon />,
    link:'/Material'
  },
  {
    value: "Orders",
    icon: <LocalGroceryStoreIcon />,
    link:'/Orders'
  },
  {
    value: "Users",
    icon: <GroupIcon />,
    link:'/Users'
  },
  {
    value: "Setting",
    icon: <SettingsIcon />,
    link:'/Settings'
  },{
    value: "Logout",
    icon: <ExitToAppIcon />,
    link: "/Logout",
  },
]