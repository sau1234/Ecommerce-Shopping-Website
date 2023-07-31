import axios from 'axios';

import * as actionTypes from '../constants/cartConstant';
const URL = ''
export const addToCart = (id, quantity) => async(dispatch) =>{
     try {
         const {data} = await axios.get(`${URL}/product/${id}`);

         dispatch({ type: actionTypes.ADD_TO_CART, payload: {...data, quantity }});
     } catch (error) {
        console.log('Error while calling cart API');
     }
}

export const removeFromCart = (id) => (dispatch) =>{
        // no api call thats why try catch block not written
        dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id})
} 