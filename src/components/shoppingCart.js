import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../contador/reducers/shoppingReducer'

const ShoppingCart = () => {
  //este es el hooks reducer
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const {products, cart} = state
  const addToCart = () => {}
  const delFromCart = () => {}
  const clearCart = () => {}
  return (
    <div>
        <h1>Carrito de Compras</h1>
        <h1>productos</h1>
        <article></article>
        <h1>carrito</h1>
        <article></article>
    </div>
  )
}

export {ShoppingCart}