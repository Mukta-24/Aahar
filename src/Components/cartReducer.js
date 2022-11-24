const cartReducer = (state, action) =>{
    if(action.type === "ADD-TO-CART"){
        let {id, name, rate, image} = action.payload;
        // console.log(id + " " + name+ " " + rate)
        let cartProduct;
        cartProduct = {
            id, 
            name, 
            rate, 
            image
        };
        return{
            ...state, 
            cart: [...state.cart, cartProduct],
        }
    }
    if(action.type === "SET_INCREMENT"){
        // let {id} = action.payload;
        let updatedProduct = state.cart.map((curElem)=>{
            console.log(curElem.id)
            // if(curElem.id === action.payload){
            // }
        })
    }

    return state;
}

export default cartReducer;