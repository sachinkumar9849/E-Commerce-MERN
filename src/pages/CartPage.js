import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Cart from '../features/cart/Cart'

const CartPage = () => {
  return (
    <div>
        <Navbar>
            <Cart></Cart>
        </Navbar>
    </div>
  )
}

export default CartPage