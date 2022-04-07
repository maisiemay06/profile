import React, { useState } from 'react';
import linkedInLogo from '../imgs/linkedin-logo.png';
import meeowLogo2 from '../imgs/meeow-logo2.png';
import profileImg from '../imgs/profile-img.png';
import openWindowIcon from '../imgs/open-window-icon.png';
import holderImg from '../imgs/holder-img.png';
import EditProfile from './EditProfile';
import '../styles/ProfileSummary.css';

export default function ProfileSummary() {
  const [isOpen, setIsOpen] = useState(false);
  
  function editProfile(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div className="card main-card profile-summary">
      <i className="fa-solid fa-pen-to-square edit-btn edit-btn-wht"></i>

      <div className="cover-img"></div>
      <img src={profileImg} alt="" className='profile-img'></img>
      <i className="fa-solid fa-pen-to-square edit-btn edit-btn-profile" onClick={editProfile} id='edit-profile'></i>  
      {isOpen && <EditProfile handleClose={editProfile}/>}
      <div className="summary-info container-fluid text-wrapper">
        <div className="row">
          <div className="col-sm-7">
            <div className="intro">
              <h2 className="profile-name">Simon Glenn - MEEOWMAN</h2>
              <p className="job-title">Co-Founder at Meeow</p>
              <p className="location">Cleckheaton, England, United Kingdom</p>
              <p className="connections">155 Meeow Connections</p>
            </div>
            <div className="contact">
              <h4 className='summary-title'>Contact info</h4>
              <ul>
                <li> 
                  <img src={meeowLogo2} alt="" className='meeow-link-img contact-icon'></img>
                  <a href="https://www.meeow.co/simonglennbrandboy" className="contact-link">https://www.meeow.co/simonglennbrandboy</a>
                  <img src={openWindowIcon} alt="" className='open-window-icon'></img>
                </li>
                <li>
                  <img src={linkedInLogo} alt="" className="linkedin-logo-img contact-icon"></img>
                  <a href="https://www.linkedin.com/in/brandboy/" className="contact-link">https://www.linkedin.com/in/brandboy/</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="exp-edu-summary col-sm-3">
            <div className="img-list-container">
              <img src={meeowLogo2} alt="" className='exp-edu-img'></img>
              <p>Meeow Ltd</p>
            </div>
            <div className="img-list-container">
              <img src={holderImg} alt="" className='exp-edu-img'></img>
                <p>Whitcliffe Mount Comprehensive School</p>
            </div>
          </div>
          <div className="languages col-sm-2">
            <h4 className='summary-title'>Languages</h4>
              <ul className='close-list'>
                <li>Language 1</li>
                <li>Language 2</li>
                <li>Language 3</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}