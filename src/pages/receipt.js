import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Recipt = ({}) => {
  const { items, cartTotal } = JSON.parse(
    localStorage.getItem("react-use-cart")
  );

  return (
    <>
      <u>
        <h1>Order</h1>
      </u>
      {items.map((item) => (
        <>
          <label>Item: {item.title}; </label>
          <br />
          <label>Quantity: {item.quantity}; </label>
          <br />
          <label>Price: ₹{item.price}</label>
          <br />
          <label> </label> <br />
        </>
      ))}
      <label> </label> <br />
      <label>Total Price: {cartTotal}</label>
    </>
  );
};

export default Recipt;
