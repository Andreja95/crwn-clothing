// kombinacija svih reducera i stat-a zajedno glavni state u app
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
});
