import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


export const fetchmaterails = () =>
API.get("/materails").then((res) => {
    return res.data;
  });
export const creatmaterail = (newmaterail) =>
API({
    method: "POST",
    url: '/materails',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newmaterail,
  });
export const updatematerail = (newmaterail, id) =>
API({
      method:'patch',
    url: `/materails/${id}`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
    data: newmaterail,
  });
export const deletematerail = (id) =>
API({
    method: "DELETE",
    url: `/materails/${id}`,
    headers: {
      "Content-Type": "appliction/json",
    },
  });
