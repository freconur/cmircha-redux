import React from 'react'

const CartItem = ({data,delFromCart}) => {
    let{ id, name, price, quantity } = data
  return (
    <div>
        <h4>{name}</h4>
        <h5>${price}.00 x {quantity} = ${price*quantity}</h5>
        <button onClick={() => delFromCart(id)}>eliminar uno</button>
        <br/>
        <button onClick={() => delFromCart(id, true)}>eliminar todos</button>
    </div>
  )
}

export default CartItem