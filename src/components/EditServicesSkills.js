import React from "react";
import '../styles/PopUp.css';

export default function EditServicesSkills(props) {
    return (
        <div className="popup">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">edit in Meeow profile</h3>
                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                </div>
                <div className="edit-info-wrapper">
                    <form>
                        <div className="left-col">
                            <label htmlFor="services">Services</label>
                            <p className='services-skills-sub'>3 x Service limit</p>
                            <input type="text" id="services" placeholder='Service 1'/>
                            <input type="text" placeholder='Service 2'/>
                            <input type="text" placeholder='Service 3'/>
                            <input type="text" placeholder='Service 4'/>
                        </div>
                        <div className="right-col">
                            <label htmlFor="skills">Services</label>
                            <p className='services-skills-sub'>3 x Skill limit</p>
                            <input type="text" id="skills" placeholder='Skill 1'/>
                            <input type="text" placeholder='Skill 2'/>
                            <input type="text" placeholder='Skill 3'/>
                            <input type="text" placeholder='Skill 4'/>
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}