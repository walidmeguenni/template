import {
    FETCH_PRODUCTS,
    CREAT_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_IMAGE_PRODUCT
  } from "../constans/Types";
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return action.payload;
      case CREAT_PRODUCT:
        return [...state, action.payload];
      case UPDATE_PRODUCT:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case UPDATE_IMAGE_PRODUCT:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE_PRODUCT:
        return state.filter((post) => post._id !== action.payload);
      default: {
        return state;
      }
    }
  };
  