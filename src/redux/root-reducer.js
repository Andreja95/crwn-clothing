// kombinacija svih reducera i stat-a zajedno glavni state u app
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
});
