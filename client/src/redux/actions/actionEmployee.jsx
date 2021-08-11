import * as api from "../../services/api/apiemployee";
import {
    FETCH_EMPLOYEES,
    CREAT_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE,
  } from "../constans/Types";
export const getemployees=()=>async(dispatch)=>{
    try {
        const data =await api.fetchemployees();
        dispatch({type:FETCH_EMPLOYEES,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createmployees=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createmployee(post);
        dispatch({type:CREAT_EMPLOYEE,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateemployee=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updateemployee(post,id) 
       dispatch({type:UPDATE_EMPLOYEE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteemployee =(id)=>async (dispatch)=>{
    try {
        await api.deleteemployee(id);
        dispatch({type :DELETE_EMPLOYEE,payload:id})
    } catch (error) {
        console.log(error)
    }
}