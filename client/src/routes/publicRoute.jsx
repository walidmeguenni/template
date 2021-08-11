import React from 'react';
import { Route,Redirect } from "react-router-dom";
 
const Publicroute = ({component:Component,...rest}) => {
    const user =JSON.parse(localStorage.getItem('profile'));
   let isAuth=false;
    if (user) {
      isAuth=true; 
    }
    return (
        <Route {...rest} render={props=>isAuth?<Redirect to ='/Dashboard'/>:<Component {...props}/>}/>
    );
}
export default Publicroute;