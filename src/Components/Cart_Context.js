import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import reducer from "./cartReducer";

const CartContext = createContext();
const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("StoreCart");
    if(localCartData === 'undefined'){
        // console.log("hello");
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}
const initialState = {
    // cart:[],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50,
    count : 1
};
const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    //Add to cart
    const addTocart = (id, name, rate, image) =>{
        dispatch({type: "ADD-TO-CART", payload: {id, name, rate, image}})
    }
    //remove item
    const remove = (id)=>{
        dispatch({type: "REMOVE_ITEM", payload: {id}})
    }
    //increament and decrement
    const increment = (id)=>{
        dispatch({type: "SET_INCREMENT", payload: {id}})
    }
    const decrement = (id)=>{
        dispatch({type: "SET_DECREMENT", payload: {id}})
    }

    const ClearCart = () =>{
        // console.log("Clear called")
        dispatch({type : "CLEAR_CART"})
    }

    useEffect(()=>{
        dispatch({type : "CART_TOTAL_ITEM"})
        dispatch({type : "CART_TOTAL_PRICE"})
        localStorage.setItem("StoreCart", JSON.stringify(state.cart))
    }, [state.cart])
    return <CartContext.Provider value={{...state, addTocart, increment, decrement, ClearCart, remove}}>{children}</CartContext.Provider>
};
const useCartContext = ()=>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext};