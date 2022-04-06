import React from "react";
import '../styles/PopUp.css';

export default function editContact(props) {
    return (
        <div className="popup edit-contact">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">edit intro</h3>

                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                    <i className="fa-solid fa-angle-left back-btn" onClick={props.handleClose}></i>

                </div>
                <div className="edit-info-wrapper">
                    <form>
                        <div className="full-width">
                            <label htmlFor="profile-url">Profile URL</label>
                            <a href="https://www.meeow.co/simonglennbrandboy" id="profile-url">www.meeow.co/simonglennbrandboy</a>
                        </div>
                        <div className="full-width">
                            <label htmlFor="website-url">Website URL</label>
                            <input type="text" name="" id="webstie-url" />
                            <a href="" >+ Add website</a>
                        </div>
                        <div className="full-width">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="" id="webstie-url" />
                        </div>
                        <div className="full-width">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="" id="address" />
                        </div>
                        <div className="full-width">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"/>
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}
