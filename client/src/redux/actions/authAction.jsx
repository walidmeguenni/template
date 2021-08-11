import * as api from "../../services/api/apiAuth";
import { updatePassword } from "../../services/api/apiUser";
import { AUTH_FIALED, AUTH, UPDATE_PASSWORD_FIALED, LOGOUT, UPDATE_PASSWORD } from "../constans/Types";
export const SignIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.SignIn(formData);
    if (data.massege) {
      dispatch({ type: AUTH_FIALED, payload: data.massege });
      router.push("/auth");
    } else {
      dispatch({ type: AUTH, payload: data });
      router.push("/Dashboard");
    }
  } catch (error) {
    console.log(error);
  }
};
export const SignUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.SignUp(formData);
    dispatch({ type: AUTH, payload: data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const updatepassword = (formData, router, id) => async (dispatch) => {
  try {
    const { data } = await updatePassword(formData, id);
    if (data.massege==="password updated") {
      await dispatch({ type: LOGOUT});
      await dispatch({type:UPDATE_PASSWORD,payload: data.massege})
      router.push("/auth");
    } else {
      dispatch({ type: UPDATE_PASSWORD_FIALED, payload: data.massege });
      router.push("/Setting");
      
    }
  } catch (error) {
    console.log(error);
  }
};
