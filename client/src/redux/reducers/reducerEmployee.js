import {
    FETCH_EMPLOYEES,
    CREAT_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE,
  } from "../constans/Types";
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_EMPLOYEES:
        return action.payload;
      case CREAT_EMPLOYEE:
        return [...state, action.payload];
      case UPDATE_EMPLOYEE:
        return state.map((post) =>
          post._id === action.payload._id ? post : action.payload
        );
      case DELETE_EMPLOYEE:
        return state.filter((post) => post._id !== action.payload);
      default: {
        return state;
      }
    }
  };
  