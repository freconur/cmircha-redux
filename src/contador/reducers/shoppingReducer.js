import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    product: [
        {id:1, name:"producto1", price: 111},
        {id:4, name:"producto4", price: 111},
        {id:5, name:"producto5", price: 111},
        {id:6, name:"producto6", price: 111},
        {id:7, name:"producto7", price: 111},
        {id:8, name:"producto8", price: 111},
    ],
    cart:[],
};


export function shoppingReducer (state, action){
switch(action.type){
    case TYPES.ADD_TO_CART:{
        
    }
    case TYPES.REMOVE_ONE_FROM_CART:{

    }
    case TYPES.REMOVE_ALL_FROM_CART:{

    }
    case TYPES.CLEAR_CART:{

    }
    default:
        return state 

}
}