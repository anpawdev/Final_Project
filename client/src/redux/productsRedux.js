import axios from 'axios';
import { API_URL } from '../config';

/* INITIAL STATE */

const initialState = {
    added: [],
    summary: 0,
    singleProduct: {},
};

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getProducts = ({ products }) => products;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const ADD_TO_BASKET = createActionName('ADD_TO_BASKET');
export const ADD_AMOUNT = createActionName('ADD_AMOUNT');
export const REMOVE_AMOUNT = createActionName('REMOVE_AMOUNT');
export const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const addToBasket = payload => ({ payload, type: ADD_TO_BASKET });
export const addAmount = payload => ({ payload, type: ADD_AMOUNT });
export const removeAmount = payload => ({ payload, type: REMOVE_AMOUNT });
export const deleteProduct = payload => ({ payload, type: DELETE_PRODUCT });

/* REDUCER */

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_PRODUCTS:
        return [ ...action.payload ];
      case ADD_TO_BASKET:
          let added = [...state.added, action.payload];
          state.added.map((product) => {
              if (product.id === action.payload.id) {
                  product.amount = 1;
                  added = [...state.added]
              }
          })
        return {
            "added": added,
            "summary": state.summary + action.payload.price,
        }
      case ADD_AMOUNT:
          state.added.map((product) => {
              if (product.id === action.payload.id) { product.amount += 1 }
          })
        return {
            "added": [...state.added],
            "summary": state.summary + action.payload.price,
        }
      case REMOVE_AMOUNT:
          state.added.map((product) => {
            if (product.id === action.payload.id) { product.amount -= 1 }
          })
        return {
            "added": state.added.filter(function (object) { return object.amount !== 0 }),
            "summary": state.summary - action.payload.price,
        }
      case DELETE_PRODUCT:
        let price = 0;
          state.added.map((product) => {
            if (product.id === action.payload.id) { 
              price = product.price * product.amount;
              product.amount = 0; 
            }
          })
        return {
            "added": state.added.filter(function (object) { return object.amount !== 0 }),
            "summary": state.summary - price,
        }
      default:
        return state;
    }
};

/* THUNKS */
export const loadProductsRequest = () => {
    return dispatch => {
  
    axios.get(`${API_URL}/products`).then(res => {
        dispatch(loadProducts(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  
    };
  };