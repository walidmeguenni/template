import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchusers = () =>API.get("/users").then((res) => {return res.data;});
export const fetchuser = (id) =>API.get(`/users/${id}`).then((res) => {return res.data;});
export const updateuser = (newuser, id) =>API.patch(`/users/${id}`,{data: newuser,});
export const deleteuser = (id) =>API.delete(`/users/${id}`);

export const updatePassword = (newuser, id) =>API.put(`/users/updatepassword/${id}`,{data: newuser,});

export const updatenewuser = (newuser, id) =>
API({
    method:'patch',
    url: `/users/updateimage/${id}`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
    data: newuser,
  });