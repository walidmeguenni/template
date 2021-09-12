import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchcustomers = () =>API.get("/customers").then((res) => {return res.data;});
export const creatcustomer = (newcustomer) =>API.post('/customers',{ data: newcustomer });
export const updatecustomer = (newcustomer, id) =>API.patch(`/customers/${id}`,{data: newcustomer,});
export const deletecustomer = (id) =>API.delete(`/customers/${id}`);
