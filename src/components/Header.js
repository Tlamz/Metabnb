import React from "react";
import logo from "./../images/logo.png"


export function Header() {
    return (
      <header>
        <div className="header-wrapper">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="header-list">
            <ul>
              <li>Home</li>
              <li>Place to stay</li>
              <li>NFTs</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <button className="header-button">Connect wallet</button>
          </div>
        </div>
        {/* <div>
                <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div>
                <img src={picture2} alt="Ingressive4Good" />
            </div> */}
      </header>
    );
}