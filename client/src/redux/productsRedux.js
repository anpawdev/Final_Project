import axios from 'axios';
import { API_URL } from '../config';

/* INITIAL STATE */

const initialState = [];

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getProducts = ({ products }) => products;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
      case LOAD_PRODUCTS:
        return [ ...action.payload ];
      default:
        return statePart;
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