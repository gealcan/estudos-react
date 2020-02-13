import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "10vh",
        backgroundColor: "lightblue"
      }}
    >
      <h3>Logo</h3>
      <ul
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          listStyle: "none"
        }}
      >
        <Link style={{ color: "black" }} to="/about">
          <li>About</li>
        </Link>
        <Link style={{ color: "black" }} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
