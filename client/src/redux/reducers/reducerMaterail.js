import {
    FETCH_MATERAILS,
    CREAT_MATERAIL,
    UPDATE_MATERAIL,
    DELETE_MATERAIL,
  } from "../constans/Types";
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_MATERAILS:
        return action.payload;
      case CREAT_MATERAIL:
        return [...state, action.payload];
      case UPDATE_MATERAIL:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE_MATERAIL:
        return state.filter((post) => post._id !== action.payload);
      default: {
        return state;
      }
    }
  };
  