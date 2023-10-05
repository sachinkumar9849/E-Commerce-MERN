import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
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
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>$19.99</td>
              <td>
                <input type="number" className="form-control" value="1" />
              </td>
              <td>$19.99</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>$24.99</td>
              <td>
                <input type="number" className="form-control" value="2" />
              </td>
              <td>$49.98</td>
            </tr>
          </tbody>
        </table>
        <div className="text-right">
          <p>Total: $69.97</p>
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
