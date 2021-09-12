import { combineReducers } from "redux";
import employees from './reducerEmployee';
import materails from './reducerMaterail';
import products from "./reducerProducts";
import orders from "./reducerorders";
import auth from "./authreduce";
import customers from './reducerCustomer';
import suppliers from './reducerSupplier';
import users from './reduxUser'
export default combineReducers({
  products,
  orders,
  auth,
  employees,
  materails,
  customers,
  suppliers,
  users
});
