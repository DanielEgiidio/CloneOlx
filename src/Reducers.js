
import { combineReducers } from 'redux';
import useReducer from './reducers/userReducers';


export default combineReducers({
   user:useReducer 
});