import * as api from "../../services/api/apiOrders";
import {
    FETCH_ORDERS,
    CREAT_ORDER,
    UPDATE_ORDER,
    DELETE_ORDER,
  } from "../constans/Types";
export const getorders=()=>async(dispatch)=>{
    try {
        const data =await api.fetchorders();
        dispatch({type:FETCH_ORDERS,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const creatorders=(post)=>async(dispatch)=>{
    try {
        console.log(post)
        const {data}=await api.creatorder(post);
        dispatch({type:CREAT_ORDER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateorder=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updateorder(post,id) 
       dispatch({type:UPDATE_ORDER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteorder =(id)=>async (dispatch)=>{
    try {
        await api.deleteorder(id);
        dispatch({type :DELETE_ORDER,payload:id})
    } catch (error) {
        console.log(error)
    }
}