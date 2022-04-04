import React from "react";
import '../styles/PopUp.css';

export default function EditEducation(props) {
    return (
        <div className="popup">
            <div className="popup-box">
                <div className="popup-head">
                    <h3 className="popup-title">edit education</h3>
                    <i className="fa-solid fa-xmark close-btn" onClick={props.handleClose} ></i>
                </div>
                <div className="edit-info-wrapper">
                <form>
                        <div className="full-width">
                            <label htmlFor="school">School*</label>
                            <input type="text" id="school" placeholder="Whitcliffe Mount Comprehensive School"/>
                        </div>
                        <div className="full-width">
                            <label htmlFor="degree">Degree</label>
                            <select name="" id="degree">
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="temporary">Temporary</option>
                                <option value="Intern">Intern</option>
                            </select>
                        </div>
                        <div className="full-width">
                            <label htmlFor="field-study">Field of Study</label>
                            <input type="text" id="field-study"/>
                        </div>
                        <label htmlFor="start-date" className="column-1">Start date</label>
                        <label htmlFor="end-date" className="column-3">End date</label>
                        <div className="column-1">
                            <select name="" id="start-date">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="column-2">
                        <select name="" id="start-year">
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                            </select>
                        </div>
                        
                        <div className="column-3">
                            <select name="" id="end-date">
                                <option value="Present">Present</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="column-4">
                            <select name="" id="end-year">
                                <option value="Present">Present</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                            </select>
                        </div>
                        <div className="full-width">
                            <label htmlFor="grade">Grade</label>
                            <input type="text" id="location" />
                        </div>
                        <div className="full-width">
                            <label htmlFor="activities">Activities and societies</label>
                            <textarea name="" id="activities" cols="30" rows="10" maxLength={500}></textarea>
                        </div>
                        <div className="full-width">
                            <label htmlFor="description">Description</label>
                            <textarea name="" id="description" cols="30" rows="10" maxLength={500}></textarea>
                        </div>
                    </form>
                </div>
                <input type="submit" value='save' className="save-btn" onClick={props.handleClose}/>
            </div>
        </div>
    )
}