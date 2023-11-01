import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" id="homePage">
      <Link to="/home">
        <div className="container">
          <h1>Welcome To Our Cafeteria!</h1>
        </div>
        <Link to="/menu">
          <button type="button" className="btn btn-secondary">
            Order Now
          </button>
        </Link>
      </Link>
    </div>
  );
};

export default Home;
