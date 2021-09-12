import * as api from "../../services/api/apimaterail";
import {
    FETCH_MATERAILS,
    CREAT_MATERAIL,
    UPDATE_MATERAIL,
    DELETE_MATERAIL,
    UPDATE_IMAGE_MATERIAL,
  } from "../constans/Types";
export const getmaterails=()=>async(dispatch)=>{
    try {
        const data =await api.fetchmaterails();
        dispatch({type:FETCH_MATERAILS,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const creatmaterails=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.creatmaterail(post);
        dispatch({type:CREAT_MATERAIL,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updatematerail=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updatematerail(post,id) 
       dispatch({type:UPDATE_MATERAIL,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletematerail =(id)=>async (dispatch)=>{
    try {
        await api.deletematerail(id);
        dispatch({type :DELETE_MATERAIL,payload:id})
    } catch (error) {
        console.log(error)
    }
}
export const updateimagematerial=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updatematerialimage(post,id) 
       dispatch({type:UPDATE_IMAGE_MATERIAL,payload:data})
    } catch (error) {
        console.log(error)
    }
}