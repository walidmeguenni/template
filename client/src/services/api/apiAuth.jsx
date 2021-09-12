import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });
export const SignIn = async (userData) => {
  try {
    return await API.post("/users/login", userData);
  } catch (error) {
    console.log(error);
  }
};

export const verifyUser = (code) => {
  return API.get("/users/confirm/" + code).then((response) => {
    return response.data;
  });
};

export const verifyToken = (code) => {
    return API.get("/users/change/" + code).then((response) => {
      return response.data;
    });
  };
export const Check = async (userData) => {
  try {
    return await API.post("/users/check", userData);
  } catch (error) {
    console.log(error);
  }
};
export const Change = async (userData,id) => {
    try {
      return await API.put(`/users/changepassword/${id}`, userData);
    } catch (error) {
      console.log(error);
    }
  };
  
export const SignUp = async (userData) => {
  try {
    return await API.post("/users/signup", userData);
  } catch (error) {
    console.log(error);
  }
};

  
export const Logout= async (id) => API.get(`/users/logout/${id}`);


