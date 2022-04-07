import React from "react";
import meeowLogo from '../imgs/meeow-logo.png';
import '../styles/SidebarNav.css';

export default function SidebarNav() {
    return (
        <nav className='sidebar-nav'>
        <img src={meeowLogo} className='logo'></img>
        <ul className='nav-list'>
          <li>Calendar</li>
          <li>Messages</li>
          <li>Connections</li>
          <li>Meeowniversity</li>
        </ul>
        <div className="sidebar-footer">
          <button className="how-to-btn button">how to Meeow</button>
          <hr></hr>
          <ul className='nav-list'> 
            <li>Terms & Conditions</li>
            <li>Privacy & Data Policies</li>
            <li>Contact Support</li>
          </ul>
        </div>
      </nav>
    )
}