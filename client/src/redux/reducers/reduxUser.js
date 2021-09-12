import {
  FETCH_USERS,
  UPDATE_USER,
  DELETE_USER,
  UPDATE_IMAGE,
} from "../constans/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case UPDATE_USER:
      return state.map((post) =>
        post._id === action.payload._id ?action.payload : post 
      );
      case UPDATE_IMAGE:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
    case DELETE_USER:
      return state.filter((post) => post._id !== action.payload);
    default: {
      return state;
    }
  }
};


// const initaiSatate={
//   one:[],
//   many:[]
// }
// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state = initaiSatate, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return {...state.many,many:action.payload};
//     case FETCH_USER:
//       return {...state.one,one:action.payload};
//     case UPDATE_USER:
//       return {...state.one, one:action.payload}
//     case UPDATE_IMAGE:
//       return {...state.one,one:action.payload};
//     case DELETE_USER:
//       console.log(action.payload)
//       return {...state,many:state.many.filter((post) => post._id !== action.payload)};
//     default: {
//       return state;
//     }
//   }
// };
