import React from 'react';
import { Route,Redirect } from "react-router-dom";
 
const Privetroute = ({component:Component,...rest}) => {
    const user =JSON.parse(localStorage.getItem('profile'));
    let isAuth=false;
     if (user) {
       isAuth=true; 
     }
    return (
        <Route {...rest} render={props=>isAuth ? <Component {...props}/> : <Redirect to ='/auth'/>}/>
    );
}

export default Privetroute;