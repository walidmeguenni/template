import * as api from "../../services/api/apiAuth";
import { updatePassword } from "../../services/api/apiUser";
import {
  AUTH_FIALED,
  AUTH,
  UPDATE_PASSWORD_FIALED,
  LOGOUT,
  UPDATE_PASSWORD,
  CHECK_EMAIL,
  CHANGE_PASSWORD,
  FETCH_USERS,
} from "../constans/Types";
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
export const CHECK = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.Check(formData);
    if (data.massege) {
      dispatch({ type: CHECK_EMAIL, payload: data.massege });
      router.push("/check");
    }
  } catch (error) {
    console.log(error);
  }
};

export const CHANGE = (formData, router, id) => async (dispatch) => {
  try {
    const { data } = await api.Change(formData, id);
    if (data.massege) {
      dispatch({ type: CHANGE_PASSWORD, payload: data.massege });
      router.push("/auth");
    }
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.SignUp(formData);
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

export const updatepassword = (formData, router, id) => async (dispatch) => {
  try {
    const { data } = await updatePassword(formData, id);
    if (data.massege === "password updated") {
      await dispatch({ type: LOGOUT });
      await dispatch({ type: UPDATE_PASSWORD, payload: data.massege });
      router.push("/auth");
    } else {
      dispatch({ type: UPDATE_PASSWORD_FIALED, payload: data.massege });
      router.push("/Setting");
    }
  } catch (error) {
    console.log(error);
  }
};

export const LOG_OUT = (router, id) => async (dispatch) => {
  try {
    const { data } = await api.Logout(id);
    await dispatch({ type: FETCH_USERS, payload: data });
    await dispatch({ type: LOGOUT });
    router.push("/auth");
  } catch (error) {
    console.log(error);
  }
};
