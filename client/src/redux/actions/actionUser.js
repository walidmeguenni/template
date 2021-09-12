import * as api from "../../services/api/apiUser";
import {
    FETCH_USERS,
    UPDATE_USER,
    DELETE_USER,
    FETCH_USER,
    UPDATE_IMAGE,
  } from "../constans/Types";
export const getusers=()=>async(dispatch)=>{
    try {
        const data =await api.fetchusers();
        dispatch({type:FETCH_USERS,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const getuser=(id)=>async(dispatch)=>{
    try {
        const data=await api.fetchuser(id);
        dispatch({type:FETCH_USER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateuser=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updateuser(post,id) 
       console.log(data)
       dispatch({type:UPDATE_USER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateimageuser=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updatenewuser(post,id) 
       dispatch({type:UPDATE_IMAGE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteuser =(id)=>async (dispatch)=>{
    try {
        await api.deleteuser(id)
        dispatch({type:DELETE_USER,payload:id})
    } catch (error) {
        console.log(error)
    }
}