import {
    FETCH_ORDERS,
    CREAT_ORDER,
    UPDATE_ORDER,
    DELETE_ORDER,
  } from "../constans/Types";
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_ORDERS:
        return action.payload;
      case CREAT_ORDER:
        return [...state, action.payload];
      case UPDATE_ORDER:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE_ORDER:
        return state.filter((post) => post._id !== action.payload);
      default: {
        return state;
      }
    }
  };
  