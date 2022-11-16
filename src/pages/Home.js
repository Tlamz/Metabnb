import React from 'react';
import { Header } from '../components/Header';
import image from "./../images/hero-image.png"
import tokenimg from "./../images/mb-token.svg";
import metamaskimg from "./../images/metamask.svg";
import openseaimg from "./../images/opensea.svg";
import king1 from "./../images/desert-king1.png";
import king2 from "./../images/desert-king2.png";
import king3 from "./../images/desert-king3.png";
import king4 from "./../images/desert-king4.png";
import king5 from "./../images/desert-king5.png";
import king6 from "./../images/desert-king6.png";
import king7 from "./../images/desert-king7.png";
import king8 from "./../images/desert-king8.png";
import star from "./../images/star.png";
import threeimg from "./../images/three-in-one-img.png";
import { Footer } from '../components/Footer';


export function Home () {
    return (
      <>
        <Header />
        <div className="hero-section">
          {/* < className="hero-flex"> */}
          <div className="hero-left">
            <h1>
              Rent a <span>Place</span> away from <br /> <span>Home</span> in
              the <span>Metaverse</span>
            </h1>
            <p>
              we provide you access to luxury and affordable houses <br /> in
              the metaverse, get a chance to turn your <br />
              imagination to reality at your comfort zone
            </p>
            <form action="">
              <div>
                <input
                  className="input-search"
                  type="text"
                  placeholder="Search for location"
                />
                <input className="input-submit" type="submit" value="Search" />
              </div>
            </form>
          </div>
          <div className="hero-right">
            <img className="hero-image" src={image} alt="" />
          </div>
        </div>
        <div className="coins-section">
          <div className="coins">
            <div>
              <img src={tokenimg} alt="" />
            </div>
            <div>
              <img src={metamaskimg} alt="" />
            </div>
            <div>
              <img src={openseaimg} alt="" />
            </div>
          </div>
        </div>
        <div className="location-wrapper-main">
          <div className="location-section">
            <h2 className="location-main-text">
              Inspiration for your next adventure
            </h2>
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
        <div className="nfts">
          <div className="nfts-section">
            <div className="nfts-left">
              <h3>Metabnb NFTs</h3>
              <div>
                <p className='nfts-subtext'>
                  Discover our NFT gift cards collection. Loyal <br /> customers gets
                  amazing gift cards which are <br /> traded as NFTs. These NFTs gives
                  our cutomer <br /> access to loads of our exclusive services.
                </p>
              </div>
              <div>
                <button className='nfts-btn'>Learn more</button>
              </div>
            </div>
            <div className="nfts-right">
                <img src={threeimg} alt="" />
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
}