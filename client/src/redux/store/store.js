import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { allProductsReducer } from '../allProducts/reducer';
import { authReducer } from '../auth/reducer';
import { cartReducer } from '../cartProducts/reducer';
import { favouriteReducer } from '../favouriteProducts/reducer';
import { oneProductReducer } from '../oneProduct/reducer';
import { orderReducer } from '../orderDetails/reducer';


const rootReducer = combineReducers({
    allProductsReducer,
    oneProductReducer,
    authReducer,
    favouriteReducer,
    cartReducer,
    orderReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));