import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Pay from "./pages/Pay";
import Done from "./pages/Done";
import Menu from "./Cart/Menu";
import Cart from "./Cart/Cart";
import { CartProvider } from "react-use-cart";
import Recipt from "./pages/receipt";

const App = () => {
  const toge = () => {
    return (
      <>
        <div className="container">
          <CartProvider>
            <Menu />
            <Cart />
          </CartProvider>
        </div>
      </>
    );
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/home" exact Component={Home} />
          <Route path="/menu" exact Component={toge} />
          <Route path="/pay" exact Component={Pay} />
          <Route path="/done" exact Component={Done} />
          <Route path="/receipt" exact Component={Recipt} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
