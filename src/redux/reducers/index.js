import { combineReducers } from 'redux';
import  users  from './users';
import  dog  from './dog';

const rootReducer = combineReducers({
    users: users,
    dog: dog,
});

export default rootReducer;