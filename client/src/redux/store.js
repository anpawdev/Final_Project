import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Products from './productsData';
import Basket from './productsRedux';

const rootReducer = combineReducers({
    products: Products,
    basket: Basket
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;