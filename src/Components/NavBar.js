import React from "react";
import { Link } from "react-router-dom";
import "C:\\Users\\user\\Downloads\\eshopreact\\src\\App.css";

const NavBar = ({ cartedItems }) => {
  return (
    <>
      <div className="nav-bar">
        <h3>Charlotte's #1 Gold and Silver dealer</h3>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>({cartedItems.length})
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
