import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:4000'})
export const SignIn=async(userData)=>{
    try {
    return await API.post('/users/login',userData)  
} catch (error) {
    console.log(error)
}}


export const SignUp=async(userData)=>{
    try {
    return await API.post('/users/signup',userData)
} catch (error) {
    console.log(error)
}}
