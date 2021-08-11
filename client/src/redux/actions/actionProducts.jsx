import * as api from "../../services/api/apiProduct";
import {
    FETCH_PRODUCTS,
    CREAT_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
  } from "../constans/Types";
export const getproducts=()=>async(dispatch)=>{
    try {
        const data =await api.fetchproducts();
        dispatch({type:FETCH_PRODUCTS,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const creatproducts=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.creatProduct(post);
        dispatch({type:CREAT_PRODUCT,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateProduct=(post,id)=>async(dispatch)=>{
    try {
       const {data}=await api.updateProduct(post,id) 
       dispatch({type:UPDATE_PRODUCT,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct =(id)=>async (dispatch)=>{
    try {
        await api.deleteProduct(id);
        dispatch({type :DELETE_PRODUCT,payload:id})
    } catch (error) {
        console.log(error)
    }
}