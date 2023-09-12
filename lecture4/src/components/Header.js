import React from "react";


const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://vyapar-logo-maker.s3.ap-south-1.amazonaws.com/images/logo-maker-3.webp"
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;