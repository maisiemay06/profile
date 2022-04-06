import React, { useState } from "react";
import holderImg from '../imgs/holder-img.png';
import '../styles/PopUp.css';
import EditContact from './EditContact';

export default function EditProfile(props) {
const [isOpen, setIsOpen] = useState(false);

function editContact(event) {
    event.preventDefault();
    setIsOpen(!isOpen)
}

    return (
        <div className="popup edit-profile">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">edit intro</h3>
                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                </div>
                <div className="edit-info-wrapper">
                    <div className="change-cover-img"></div>
                    <img src={holderImg} alt="" className="change-profile-img"/>
                    <form>
                        <div className="left-col">
                            <label htmlFor="first-name">First name*</label>
                            <input type="text" id="first-name"/>
                        </div>
                        <div className="right-col">
                            <label htmlFor="last-name">Last name*</label>
                            <input type="text" name="" id="last-name" />
                        </div>
                        <div className="full-width">
                            <label htmlFor="headline">Headline*</label>
                            <input type="text" name="" id="headline" />
                        
                            <label htmlFor="current-position">Current Position</label>
                            <select name="" id="current-position">
                                <option value="meeow">Founder at Meeow Ltd</option>
                            </select>
                            <a href="">Add new position</a>
                        </div>
                        <div className="full-width">
                            <input type="checkbox" name="" id="show-education" />
                            <label htmlFor="show-education" id="checkbox-label">Show education in my intro</label>
                        </div>
                        <div className="full-width">
                            <label htmlFor="education">Education</label>
                            <select name="" id="education">
                                <option value="whitcliffe">Whitcliffe Mount Comprehensive School</option>
                            </select>
                            <a href="">Add new education</a>
                        </div>
                        <div className="full-width">
                            <label htmlFor="country-region">Country/Region*</label>
                            <input type="text" id="country-region"/>
                        </div>
                        <div className="left-col">
                            <label htmlFor="post-code">Postal Code</label>
                            <input type="text" name="" id="post-code" />
                        </div>
                        <div className="right-col">
                            <label htmlFor="location">Location withing the area</label>
                            <select name="" id="location">
                                <option value="leeds">Leeds</option>
                            </select>
                        </div>
                        <div className="full-width">
                            <label htmlFor="industry">Industry*</label>
                            <input type="text" id="industry"/>
                        </div>
                        <div className="full-width">
                            <label htmlFor="contact">Contact info</label>
                            <input type="text" name="" id="contact" placeholder="Profile URL, Website, Phone, Email, Twitter, Birthday, WeChat ID"/>
                            <i className="fa-solid fa-pen-to-square edit-btn" onClick={editContact}></i> 
                            {isOpen && <EditContact handleClose={editContact}/>}
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}