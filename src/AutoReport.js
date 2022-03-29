import React from "react";

export default function AutoReport() {
    return (
        <div className="card auto-report-desc">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <h3 className="section-title">Auto Meeow Report decription</h3>
          <p className="section-descrip">This info will be included whenever anyone posts a Meeow Report to Linkedin about a Meeow you attended.</p>
          <div className="card report-box">
            <h3 className="section-title">What you do</h3>
            <p className="section-descrip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, dolore facilis qui maxime ut. Dolor, amet quasi quisquam delectus quia odit vitae explicabo! Cumque quae distinctio voluptates commodi accusantium.</p>
          </div>
          <div className="card report-box">
            <h3 className="section-title">What you're looking for</h3>
            <p className="section-descrip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, dolore facilis qui maxime ut. Dolor, amet quasi quisquam delectus quia odit vitae explicabo! Cumque quae distinctio voluptates commodi accusantium.</p>
          </div>
          <input type="checkbox" id='reports'></input>
          <label htmlFor="reports">I would like to be included in Meeow Report posts made by other and myself on Linkedin</label>
        </div>
    )
}