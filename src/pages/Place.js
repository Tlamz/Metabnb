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
import star from "./../images/star.png";

export function Place () {
    return (
      <div>
        <Header />
        <div className="location-wrapper-main">
            <div className="location-section">
                <div className="location-container">
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
                        <img src={king2} alt="" />
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
                        <img src={king3} alt="" />
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
                        <img src={king4} alt="" />
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
                        <img src={king5} alt="" />
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
                        <img src={king6} alt="" />
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
                        <img src={king7} alt="" />
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
                        <img src={king8} alt="" />
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
    )
}