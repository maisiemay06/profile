import React from "react";
import './PopUp.css';

export default function EditAutoReport(props) {
    return (
        <div className="popup">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">Meeow Report description</h3>
                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                </div>
                <div className="edit-info-wrapper">
                    <form>
                        <div className="full-width">
                            <label htmlFor="what-you-do">What do you do?</label>
                            <textarea name="" id="what-you-do" cols="80" rows="5" placeholder='30 character limit' maxLength={30}></textarea>
                        </div>
                        <div className="full-width">
                            <label htmlFor="what-look-for">What are you looking for?</label>
                            <textarea name="" id="what-look-for" cols="80" rows="5" placeholder='30 character limit' maxLength={30}></textarea>
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}