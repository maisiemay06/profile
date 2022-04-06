import React from "react";
import '../styles/PopUp.css';

export default function EditAvoid(props) {
    return (
        <div className="popup">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">edit professions to avoid x 3</h3>
                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                </div>
                <div className="edit-info-wrapper">
                    <form>
                        <div className="full-width">
                            <label htmlFor="enter-professions">Tell us which professions you'd rather avoid in your Meeows. You can choose up to 3 professions and chnage these at any time.</label>
                            <input type='text' list="professions"/>
                            <datalist id="professions">
                                <option value="Financial Controller"/>
                                <option value="Financial Advisor"/>
                            </datalist>
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}