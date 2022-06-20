import React from 'react'

const ProductItem = ({data, addToCart}) => {
    let{id, name, price} = data;
  return (
    <div>ProductItem
        <h4>{name}</h4>
        <h4>${price}</h4>
        <button onClick={()=> addToCart(id)}>Agregar</button>
    </div>
  )
}

export default ProductItem