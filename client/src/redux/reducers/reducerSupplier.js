import {
    FETCH_SUPPLIERS,
    CREAT_SUPPLIER,
    UPDATE_SUPPLIER,
    DELETE_SUPPLIER,
  } from "../constans/Types";
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_SUPPLIERS:
        return action.payload;
      case CREAT_SUPPLIER:
        return [...state, action.payload];
      case UPDATE_SUPPLIER:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE_SUPPLIER:
        return state.filter((post) => post._id !== action.payload);
      default: {
        return state;
      }
    }
  };
  