import React from "react";
import footerlogo from "./../images/logo2.svg";
import facebook from "./../images/facebook.png";
import instagram from "./../images/instagram.png";
import twitter from "./../images/twitter.png";

export function Footer() {
    return (
      <footer className="footer-container">
        <div className="footer-section">
            <div className="footer-flex">
                <div className="top-footer">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="" />
                        </div>
                        <div className="social-icons">
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                    <div className="footer-column">
                        <h6>Community</h6>
                        <ul>
                            <li>NFT</li>
                            <li>Tokens</li>
                            <li>Landlords</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h6>Places</h6>
                        <ul>
                            <li>Castle</li>
                            <li>Farms</li>
                            <li>Beach</li>
                            <li>Learn more</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h6>About us</h6>
                        <ul>
                            <li>Road map </li>
                            <li>Creators</li>
                            <li>Career</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p>© 2022 Metabnb</p>
                </div>
            </div>
        </div>
      </footer>
    );
}