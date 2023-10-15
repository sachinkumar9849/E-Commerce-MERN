import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteItemFormCartAsync,
  selectItems,
  updateCartAsync,
} from "./cartSlice";

const Cart = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ ...item, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFormCartAsync(id));
  };

  return (
    <div>
      <div className="container mt-5">
        <h1> Cart</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <>
                  <tr key="index">
                    <th scope="row">1</th>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <select
                        onChange={(e) => handleQuantity(e, item)}
                        value={item.quantity}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </td>
                    <td>
                      
                      <img src={items.thumbnail} alt="" />
                    </td>
                    <td>{item.category}</td>
                    <td>
                      
                      <button onClick={(e) => handleRemove(e, item.index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="text-right">
          <p>Total: ${totalAmount}</p>
          <p>Total Items in cart: {totalItems} Items</p>
          <Link className="btn btn-info text-white" to="/checkout">
            Checkout
          </Link>
          <Link to="/">Or Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
