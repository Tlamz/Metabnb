import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png"


export function Header() {
    return (
      <header className="header-wrapper">
        <div className= "header-section">
          <div className="header-flex">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="header-list">
              <ul>
                <li>Home</li>
                <li><Link to="/place">Place to stay</Link></li>
                <li>NFTs</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <button className="header-button">Connect wallet</button>
            </div>
          </div>
        </div>
      </header>
    );
}