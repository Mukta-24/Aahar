const cartReducer = (state, action) => {
  if (action.type === "ADD-TO-CART") {
    let { id, name, rate, image } = action.payload;
    // console.log(id + " " + name+ " " + rate )
    let existingProduct = state.cart.find((curElem) => curElem.id === id);
    if (existingProduct) {
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id === id) {
          let newQuantity = curElem.quantity + 1;
          return {
            ...curElem,
            quantity: newQuantity,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id,
        name,
        rate,
        image,
        quantity: 1,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "CLEAR_CART") {
    // console.log("hello")
    return {
      ...state,
      cart: [],
    };
  }
  if(action.type === "REMOVE_ITEM"){
    let updatedCart = state.cart.filter(
    (curElem) => curElem.id !== action.payload.id);
    // console.log(updatedCart)
    return {
      ...state,
      cart:updatedCart
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItem = state.cart.reduce((initialValue, curElem) => {
      let { quantity } = curElem;
      initialValue = initialValue + quantity;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_item: updatedItem,
    };
  }
  if (action.type === "CART_TOTAL_PRICE") {
    let total_amount = state.cart.reduce((initialValue, curElem) => {
      let { quantity, rate } = curElem;
      initialValue = initialValue + rate * quantity;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_amount,
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload.id) {
        let incAmount = curElem.quantity + 1;
        return {
          ...curElem,
          quantity: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_DECREMENT") {
    
    // let updatedCart = state.cart.filter(
    // (curElem) =>{
    //   curElem.id !== action.payload.id
    // }
    // );
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload.id && curElem.quantity > 1){
        
        let decAmount = curElem.quantity - 1;
        return {
          ...curElem,
          quantity: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
};

export default cartReducer;
