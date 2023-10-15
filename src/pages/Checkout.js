import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoggedInUser,
  updateUserAsync,
} from "../features/auth/authSlice";
import {
  deleteItemFormCartAsync,
  selectItems,
  updateCartAsync,
} from "../features/cart/cartSlice";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { createOrderAsync } from "../features/order/orderSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  // const item = useSelector(selectItems);
  const items = useSelector(selectItems);
  const [selectedAddress, setSelectAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectAddress(user.addresses[e.target.value]);
  };
  const handlePayment = (e) => {
    console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };

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
  const handleOrder = (e)=>{
    const order = {items,totalAmount,totalItems,user,paymentMethod,selectedAddress}
    dispatch(createOrderAsync(order))
  }

  return (
    <section>
      {!items.length && <Navigate to="/" replace={true} />}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(
                  updateUserAsync({
                    ...user,
                    addresses: [...user.addresses, data],
                  })
                );
              })}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      {...register("name", {
                        required: "Name Address is required",
                      })}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "email Address is required",
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tell:"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone"
                  {...register("phone", {
                    required: "phone Address is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">country</label>
                <select
                  className="form-control"
                  {...register("country", {
                    required: "country is required",
                  })}
                >
                  <option value="1">Nepal</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  {...register("streetAddress", {
                    required: "streetAddress Address is required",
                  })}
                  placeholder="Enter your street address"
                />
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter your city"
                    {...register("city", {
                      required: "city is required",
                    })}
                  />
                </div>
                <div className="col-lg-4">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="Enter your state"
                    {...register("state", {
                      required: "state is required",
                    })}
                  />
                </div>
                <div className="col-lg-4">
                  <label htmlFor="zip">ZIP/Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder="ZIP/Postal Code"
                    {...register("zip", {
                      required: "zip is required",
                    })}
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button type="submit" className="btn btn-info">
                  Cancel
                </button>
              </div>
            </form>
            <h3>Address list</h3>
            {user.addresses.map((address, index) => {
              const {
                name,
                email,
                phone,
                country,
                streetAddress,
                city,
                state,
                zip,
              } = address;
              return (
                <li key={index}>
                  <div className="address">
                    <input
                      name="address"
                      type="radio"
                      value={index}
                      onChange={handleChange}
                    />
                    <div>
                      <strong>{name}</strong> <br />
                      <i>{email}</i>
                      <p>{phone}</p>
                      <p>{country}</p>
                      <p>{streetAddress}</p>
                      <p>{city}</p>
                      <p>{state}</p>
                      <p>{zip}</p>
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="mt-4">
              <div className="div">
                <input
                  id="cash"
                  type="radio"
                  name="payments"
                  onChange={handlePayment}
                  value="cash"
                  checked={paymentMethod === "cash"}
                />
                <label htmlFor="cash">Cash</label>
              </div>
            </div>
            <div className="mt-4">
              <div className="div">
                <input
                  type="radio"
                  id="card"
                  onChange={handlePayment}
                  value="card"
                  checked={paymentMethod === "card"}
                />
                <label htmlFor="cash">Cash On Delivery</label>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="container mt-5">
              <h1> Cart</h1>
              <table className="table">
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
                            <button
                              onClick={(e) => handleRemove(e, item.index)}
                            >
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
                <div onClick={handleOrder} className="btn btn-success">Order Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
