import React, { Component } from "react";
import dogLogo from "./dog-api-logo.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={dogLogo} className="icon" alt="icon" />
          <div>Choose Your Favourite Dog Breed</div>
        </div>
      </div>
    );
  }
}

export default Header;
