import React, { createContext, useReducer } from "react";
import { useContext } from "react";
import reducer from "./cartReducer";

const CartContext = createContext();
const initialState = {
    cart:[],
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
    count : 1
};
const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    //Add to cart
    const addTocart = (id, name, rate, image) =>{
        dispatch({type: "ADD-TO-CART", payload: {id, name, rate, image}})
    }

    //increament and decrement
    const increment = (id)=>{
        dispatch({type: "SET_INCREMENT", payload: {id}})
    }
    const decrement = (id)=>{
        dispatch({type: "SET_DECREMENT", payload: {id}})
    }


    return <CartContext.Provider value={{...state, addTocart, increment, decrement}}>{children}</CartContext.Provider>
};
const useCartContext = ()=>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext};