import React from "react";
import './PopUp.css';

export default function EditInterests(props) {
    return (
        <div className="popup">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">edit interests</h3>
                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                </div>
                <div className="edit-info-wrapper">
                    <form>
                        <div className="full-width">
                            <label htmlFor="enter-interests">Enter your interests as hashtags. You can add as many as you like. We’ll use this information to suggest interesting people and subjects to you.</label>
                            <input type='text' list="interests"/>
                            <datalist id="interests">
                                <option value="#financialplanning"/>
                                <option value="#networking"/>
                                <option value="#startups"/>
                            </datalist>
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}