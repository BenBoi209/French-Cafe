import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" id="homePage">
      <Link to="/home">
        <div className="container">
          <div className="alert alert-secondary" role="alert">
            Welcome To Our Cafeteria!
          </div>
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
