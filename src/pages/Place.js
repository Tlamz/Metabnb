import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import '../App.css';
import king1 from "./../images/desert-king1.png";
import king2 from "./../images/desert-king2.png";
import king3 from "./../images/desert-king3.png";
import king4 from "./../images/desert-king4.png";
import king5 from "./../images/desert-king5.png";
import king6 from "./../images/desert-king6.png";
import king7 from "./../images/desert-king7.png";
import king8 from "./../images/desert-king8.png";
import king9 from "./../images/desert-king9.png";
import king10 from "./../images/desert-king10.png";
import king11 from "./../images/desert-king11.png";
import king12 from "./../images/desert-king12.png";
import king13 from "./../images/desert-king13.png";
import king14 from "./../images/desert-king14.png";
import king15 from "./../images/desert-king15.png";
import king16 from "./../images/desert-king16.png";
import star from "./../images/star.png";
import setting from "./../images/setting-5.svg";

export function Place () {
    return (
      <div>
        <header className="header-wrapper">
          <Header />
        </header>
        <div className="top-container">
          <div className="top-section">
            <div className="nav-flex">
              <ul className="nav-list">
                <li>Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast city</li>
                <li>beach</li>
                <li>Carbins</li>
                <li>Off-grid</li>
                <li>Farm</li>
              </ul>
              <select className="list-dropdown" name="location" id="">
                <option>All</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Cottage">Cottage</option>
                <option value="Castle">Castle</option>
                <option value="Fantast city">fantast city</option>
                <option value="beach">beach</option>
                <option value="carbin">Carbins</option>
                <option value="off-grid">Off-grid</option>
                <option value="Farm">Farm</option>
              </select>
              <div className="location">
                <input type="text" placeholder="Location" />
                <span>
                  <img src={setting} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="location-wrapper-main">
          <div className="location-section">
            <div className="location-container">
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king5} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king6} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king7} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king8} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king1} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king2} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king3} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king4} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king9} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king10} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king11} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king12} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king13} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king14} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king15} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
              <div className="location-boxes">
                <div>
                  <img className="king1" src={king16} alt="" />
                </div>
                <div className="location-text">
                  <p>Desert King</p>
                  <p className="bold-text">1MBT per night</p>
                </div>
                <div className="location-text">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div>
                  <img className="star" src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}