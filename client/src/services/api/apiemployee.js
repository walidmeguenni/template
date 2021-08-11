import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


export const fetchemployees = () =>
API.get("/employees").then((res) => {
    return res.data;
  });
export const createmployee = (newemployee) =>
API({
    method: "POST",
    url: '/employees',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newemployee,
  });
export const updateemployee = (newemployee, id) =>
API({
      method:'patch',
    url: `/employees/${id}`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
    data: newemployee,
  });
export const deleteemployee = (id) =>
API({
    method: "DELETE",
    url: `/employees/${id}`,
    headers: {
      "Content-Type": "appliction/json",
    },
  });
