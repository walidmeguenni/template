import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000'})


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


export const fetchproducts = () =>
API.get("/products").then((res) => {
    return res.data;
  });
export const creatProduct = (newProduct) =>
API({
    method: "POST",
    url: '/products',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newProduct,
  });
export const updateProduct = (newProduct, id) =>
API({
      method:'patch',
    url: `/products/${id}`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
    data: newProduct,
  });
export const deleteProduct = (id) =>
API({
    method: "DELETE",
    url: `/products/${id}`,
    headers: {
      "Content-Type": "appliction/json",
    },
  });
