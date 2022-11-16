import React from 'react';
import closebtn from './../images/close-button.png';
import metamask from './../images/metamask-img.png';
import arrow from './../images/arrow.png';
import walletconnect from './../images/wallet-Connect-img.png';
// import line from './../images/line.png';

export function Modal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Connect Wallet</h3>
          <div className="close">
            <img src={closebtn} alt="" onClick={() => closeModal(false)} />
          </div>
        </div>
        {/* <img src={line} alt="" /> */}
        <div className="modal-body">
          <p className='preferred-wallet'>Choose your preferred wallet:</p>
          <div className="link-btn">
            <div className="link-title">
              <img src={metamask} alt="" />
              <p>Metamask</p>
            </div>
            <img src={arrow} alt="" />
          </div>
          <div className="link-btn">
            <div className="link-title">
              <img src={walletconnect} alt="" />
              <p>WalletConnect</p>
            </div>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

