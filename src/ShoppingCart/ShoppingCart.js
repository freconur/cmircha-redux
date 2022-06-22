import React from 'react'
import { TYPES } from './actions/shoppingAction';
import CartItem from './components/CartItem';
import { ProductItem } from './components/ProductItem';
import { shoppingInitialState, shopppingReducer } from './reducer/shoppingReducer'

const ShoppingCart = () => {
    const[state, dispatch] = React.useReducer(shopppingReducer, shoppingInitialState);
    const{products, cart} = state
    const addToCart = (id) => {
        console.log(id)
        //como desencadenamos la funcion del reducer, es atravez del dispatch
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    const delFromCart = (id, all=false) => {
        if(all) {
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        }else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    }
    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART})
    }
  return (
    <div>
        <h1>carrito de compras</h1>
        <h1>productos</h1>
        <article>
            {products.map((product) => 
            <ProductItem
            key={product.id}
            data={product}
            addToCart={addToCart}
            />)}
        </article>
        <h1>carrito</h1>
        <article>
            <button onClick={clearCart}>limpiar carrito</button>
            {
                cart.map((item, index) => 
                <CartItem
                key={index}
                data={item}
                delFromCart={delFromCart}
                />)
            }
        </article>
    </div>
  )
}

export {ShoppingCart}