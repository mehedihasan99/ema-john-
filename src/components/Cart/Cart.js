import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  // total price
  const totalPrice = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);
  // shipping price
  let shippingPrice = 0;
  for (let product of cart) {
    shippingPrice = shippingPrice + product.shipping;
  }
  // tax
  const tax = Number((totalPrice * (10 / 100)).toFixed(2));
  //   grand total
  const grandTotal = totalPrice + shippingPrice + tax;
  return (
    <div className="cart">
      <h5 className="order-summary">Order Summary</h5>
      <h5 className="cart-item">Selected Items: {cart.length} </h5>
      <h5 className="cart-item">Total Price: $ {totalPrice}</h5>
      <h5 className="cart-item">Total Shipping Charge: $ {shippingPrice}</h5>
      <h5 className="cart-item">Tax: $ {tax} </h5>
      <h5 className="cart-item">Grand Total:: $ {grandTotal} </h5>
    </div>
  );
};

export default Cart;
