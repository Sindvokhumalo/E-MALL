// Add item to Cart

import { type } from "@testing-library/user-event/dist/type"

export const addCart = (product) =>{
    return{
        type : "ADDCART",
        payload : product

    }
       

}

// Delete item from Cart
export const delCart = (product) =>{
    return{
        type : "DELITEM",
        payload : product

    }
       

}