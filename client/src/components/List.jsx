import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./ListItem";
const List = ({ Data }) => {
  return (
    <>
      {Data.map((val, index) => (
        <NavLink
          key={index}
          activeClassName="navbar__link--active"
          className="navbar__link" 
          exact 
          to={val.link}
        >
          <NavItem icon={val.icon} value={val.value} />
        </NavLink>
      ))}
    </>
  );
};

export default List;
