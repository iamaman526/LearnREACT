import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
     - logo
     -nav bar
 * body
     -search 
     -restaurentContainer
     -Restaurent Card

 * footer
     -copyright
     -links
     -address
     -content
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://vyapar-logo-maker.s3.ap-south-1.amazonaws.com/images/logo-maker-3.webp" />
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

const AppLayout = () => {
  return <div className="app">
    <Header/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
