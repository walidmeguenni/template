import {
  AUTH,
  LOGOUT,
  AUTH_FIALED,
  UPDATE_PASSWORD_FIALED,
  UPDATE_PASSWORD,
  CLEAN_MSG,
  CHECK_EMAIL,
  CHANGE_PASSWORD,
} from "../constans/Types";
const stat = {
  authData: null,
  isAuth: false,
  msg: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = stat, action) => {
  switch (action.type) {
    case AUTH:
      const data =
        { ...action } === null || { ...action } === void 0
          ? void 0
          : { ...action.payload };
      localStorage.setItem("profile", JSON.stringify(data));
      return { ...state, authData: action.payload, isAuth: true, msg: false };
    case AUTH_FIALED:
      return { ...state, msg: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, isAuth: false, msg: false };
    case UPDATE_PASSWORD:
      return { ...state, msg: action.payload };
    case CHECK_EMAIL:
      return { ...state, msg: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, msg: action.payload };
    case CLEAN_MSG:
      return { ...state, msg: false };

    case UPDATE_PASSWORD_FIALED:
      return { ...state, msg: action.payload };
    default:
      return state;
  }
};
