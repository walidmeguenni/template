import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = [thunk];
export default createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middlewares)));
