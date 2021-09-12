import React ,{useState}from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./ListItem";

const List = ({ Data }) => {
  const [active, setactive] = useState(false)
  return (
    <>
      {Data.map((val, index) => (
        <div onClick={(e)=>setactive(true)}>
          <NavLink
          key={index}
          activeClassName="navbar__link--active"
          className="navbar__link" 
          exact 
          to={val.link}
        >
          <NavItem Icon={val.icon} value={val.value} active={active}/>
        </NavLink>
        </div>
        
      ))}
    </>
  );
};

export default List;
