import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchsuppliers = () =>API.get("/suppliers").then((res) => {return res.data;});
export const creatsupplier = (newsupplier) =>API.post('/suppliers',{ data: newsupplier });
export const updatesupplier = (newsupplier, id) =>API.patch(`/suppliers/${id}`,{data: newsupplier,});
export const deletesupplier = (id) =>API.delete(`/suppliers/${id}`);