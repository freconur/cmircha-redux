import React from 'react'

// el product item va recibitr una data, que viene del estado inicial en el archivo shoppingReducer del shoppintInitialState
const ProductItem = ({data, addToCart}) => {
    let{id, name, price} = data
  return (
    <div>
        <h1>{name}</h1>
        <p>{price}</p>
        <button onClick={() => addToCart(id)}>Agregar</button>
        <hr/>
    </div>
  )
}

export {ProductItem}