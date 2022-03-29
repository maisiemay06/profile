import React from 'react';
import coverImg from './imgs/cover-img.png';
import linkedInLogo from './imgs/linkedin-logo.png';
import meeowLogo2 from './imgs/meeow-logo2.png';
import profileImg from './imgs/profile-img.png';
import openWindowIcon from './imgs/open-window-icon.png';
import holderImg from './imgs/holder-img.png';

export default function ProfileSummary() {
    return (
        <div className="card profile-summary">
          <i class="fa-solid fa-pen-to-square edit-btn edit-btn-wht"></i>
          <img src={coverImg} alt="" className='cover-img row-5'></img>
          <img src={profileImg} alt="" className='profile-img'></img>
          <div className="summary-info container">
            <i class="fa-solid fa-pen-to-square edit-btn edit-btn-profile"></i>  
            <div className="row">
              <div className="col-7">
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
              <div className="exp-edu-summary col-3">
                <ul>
                  <li>
                    <img src={meeowLogo2} alt="" className='exp-edu-img'></img>
                    <p>Meeow Ltd</p>
                  </li>
                  <li>
                    <img src={holderImg} alt="" className='exp-edu-img'></img>
                    <p>Whitcliffe Mount Comprehensive School</p>
                  </li>
                </ul>
              </div>
              <div className="languages col-2">
                <h4 className='summary-title'>Languages</h4>
                  <ul>
                    <li>Language 1   X</li>
                    <li>Language 2   X</li>
                    <li>Language 3   X</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    )
}