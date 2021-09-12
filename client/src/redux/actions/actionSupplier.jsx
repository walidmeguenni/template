import * as api from "../../services/api/apisupplier";
import {
    FETCH_SUPPLIERS,
    CREAT_SUPPLIER,
    UPDATE_SUPPLIER,
    DELETE_SUPPLIER,
  } from "../constans/Types";
export const getsuppliers=()=>async(dispatch)=>{
    try {
        const data =await api.fetchsuppliers();
        dispatch({type:FETCH_SUPPLIERS,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const creatsuppliers=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.creatsupplier(post);
        dispatch({type:CREAT_SUPPLIER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updatesupplier=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updatesupplier(post,id) 
       dispatch({type:UPDATE_SUPPLIER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletesupplier =(id)=>async (dispatch)=>{
    try {
        await api.deletesupplier(id);
        dispatch({type :DELETE_SUPPLIER,payload:id})
    } catch (error) {
        console.log(error)
    }
}