import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
