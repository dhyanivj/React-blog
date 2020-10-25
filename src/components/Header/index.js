import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headermenu">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </nav>
      <div>social media links</div>
    </header>
  );
};

export default Header;
