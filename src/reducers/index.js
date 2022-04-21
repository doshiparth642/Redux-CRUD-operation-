import { combineReducers } from "redux";
import users from './users';
import fetchReducer from './fetchReducer';
import listReducer from './tablelistReducer';


const Reducers = combineReducers({
    users,
    fetchReducer,
    listReducer,
});

export default Reducers;
