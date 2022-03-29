import React from 'react';
import coverImg from './imgs/cover-img.png';
import linkedInLogo from './imgs/linkedin-logo.png';
import meeowLogo2 from './imgs/meeow-logo2.png';
import profileImg from './imgs/profile-img.png';

export default function ProfileSummary() {
    return (
        <div className="card container profile-summary">
          <img src={coverImg} alt="" className='cover-img row-5'></img>
          <img src={profileImg} alt="" className='profile-img'></img>
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <div className="summary-info row-6">
            <i class="fa-solid fa-pen-to-square edit-btn"></i>  
            <div className="intro col-6">
              <h2 className="profile-name">Simon Glenn - MEEOWMAN</h2>
              <p className="job-title">Co-Founder at Meeow</p>
              <p className="location">Cleckheaton, England, United Kingdom</p>
              <p className="connections">155 Meeow Connections</p>
            </div>
            <div className="contact col-5">
              <h4 className='summary-title'>Contact info</h4>
              <ul>
                <li> 
                  <img src={meeowLogo2} alt="" className='meeow-link-img contact-icon'></img>
                  <a href="https://www.meeow.co/simonglennbrandboy" className="contact-link">https://www.meeow.co/simonglennbrandboy</a>
                  <i class="fa-light fa-window-restore"></i>
                </li>
                <li>
                  <img src={linkedInLogo} alt="" className="linkedin-logo-img contact-icon"></img>
                  <a href="https://www.linkedin.com/in/brandboy/" className="contact-link">https://www.linkedin.com/in/brandboy/</a>
                </li>
              </ul>
            </div>
            <div className="exp-edu-summary col-3">
              <ul>
                <li>
                  <img src="" alt="" className='exp-edu-img'></img>
                  <p>Meeow Ltd</p>
                </li>
                <li>
                  <img src="" alt="" className='exp-edu-img'></img>
                  <p>Whitcliffe Mount Comprehensive School</p>
                </li>
              </ul>
            </div>
            <div className="languages col-5">
              <h4 className='summary-title'>Languages</h4>
                <ul>
                  <li>Language 1</li>
                  <li>Language 1</li>
                  <li>Language 1</li>
                </ul>
            </div>
          </div>
        </div>
    )
}