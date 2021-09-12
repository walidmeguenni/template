import {
    FETCH_CUSTOMER,
    CREAT_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
  } from "../constans/Types";
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_CUSTOMER:
        return action.payload;
      case CREAT_CUSTOMER:
        return [...state, action.payload];
      case UPDATE_CUSTOMER:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE_CUSTOMER:
        return state.filter((post) => post._id !== action.payload);
      default: {
        return state;
      }
    }
  };
  