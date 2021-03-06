import React, { useState } from "react";
import EditAutoReport from "./EditAutoReport";
import '../styles/AutoReport.css';

export default function AutoReport() {
  const [isOpen, setIsOpen] = useState(false);
  
  function editAutoReport(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

    return (
      <div className="card main-card auto-report">
        <i className="fa-solid fa-pen-to-square edit-btn edit-btn-dark" onClick={editAutoReport}></i>
        {isOpen && <EditAutoReport handleClose={editAutoReport}/>}
        <div className="container-fluid text-wrapper">
          <h3 className="section-title">Auto Meeow Report decription</h3>
          <p className="section-descrip">This info will be included whenever anyone posts a Meeow Report to Linkedin about a Meeow you attended.</p>
          <div className="row card-deck">
            <div className="card col report-box">
              <h3 className="section-title">What you do</h3>
              <p className="section-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, dolore facilis qui maxime ut. Dolor, amet quasi quisquam delectus quia odit vitae explicabo!</p>
            </div>
            <div className="card col report-box">
              <h3 className="section-title">What you're looking for</h3>
              <p className="section-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, dolore facilis qui maxime ut. Dolor, amet quasi quisquam delectus quia odit vitae explicabo!</p>
            </div>
          </div>
          <input type="checkbox" id='reports'></input>
          <label htmlFor="reports" id="report-label">I would like to be included in Meeow Report posts made by other and myself on Linkedin</label>
        </div>
      </div>
    )
}