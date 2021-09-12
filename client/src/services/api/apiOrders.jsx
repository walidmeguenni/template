import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchorders = () =>API.get("/orders").then((res) => {return res.data;});
export const creatorder = (neworder) =>API.post('/orders',{ data: neworder, });
export const updateorder = (neworder, id) =>API.patch(`/orders/${id}`,{data: neworder,});
export const deleteorder = (id) =>API.delete(`/orders/${id}`);
