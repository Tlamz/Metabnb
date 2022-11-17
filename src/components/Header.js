import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png"
import { Modal } from "./Modal";


export function Header() {
  const [showModal, setShowModal] = useState(false)
    return (
      <>
        <div className="header-section">
          <div className="header-flex">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="header-list">
              <ul>
                <li>Home</li>
                <li>
                  <Link to="/place" className="place-stay">
                    Place to stay
                  </Link>
                </li>
                <li>NFTs</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <button
                className="header-button"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
        {showModal && <Modal closeModal={setShowModal} />}
      </>
    );
}