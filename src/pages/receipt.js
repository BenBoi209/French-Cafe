import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Recipt = ({}) => {
  const { items, totalItems } = JSON.parse(
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
        </>
      ))}
    </>
  );
};

export default Recipt;
