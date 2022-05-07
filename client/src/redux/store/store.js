import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { allProductsReducer } from '../allProducts/reducer';
import { oneProductReducer } from '../oneProduct/reducer';


const rootReducer = combineReducers({ allProductsReducer, oneProductReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk));