import * as api from "../../services/api/apicustomer";
import {
    FETCH_CUSTOMER,
    CREAT_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
  } from "../constans/Types";
export const getcustomers=()=>async(dispatch)=>{
    try {
        const data =await api.fetchcustomers();
        dispatch({type:FETCH_CUSTOMER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const creatcustomers=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.creatcustomer(post);
        dispatch({type:CREAT_CUSTOMER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updatecustomer=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updatecustomer(post,id) 
       dispatch({type:UPDATE_CUSTOMER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletecustomer =(id)=>async (dispatch)=>{
    try {
        await api.deletecustomer(id);
        dispatch({type :DELETE_CUSTOMER,payload:id})
    } catch (error) {
        console.log(error)
    }
}