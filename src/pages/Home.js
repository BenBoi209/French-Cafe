import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Home = () => {
  const { emptyCart } = JSON.parse(localStorage.getItem("react-use-cart"));
  return (
    <div className="home" id="homePage">
      <Link to="/home">
        <div className="container">
          <h1>Welcome To Our Cafeteria!</h1>
        </div>
        <Link to="/menu">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => emptyCart()}
          >
            Order Now
          </button>
        </Link>
      </Link>
    </div>
  );
};

export default Home;
