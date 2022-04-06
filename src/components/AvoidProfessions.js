import React, { useState } from "react";
import '../styles/AvoidProfessions.css';
import EditAvoid from "./EditAvoid";

export default function AvoidProfessions() {
const [isOpen, setIsOpen] = useState(false);

function editAvoid(event) {
  event.preventDefault();
  setIsOpen(!isOpen);
}

    return (
        <div className="card main-card avoid">
          <i className="fa-solid fa-pen-to-square edit-btn" onClick={editAvoid}></i>  
          {isOpen && <EditAvoid handleClose={editAvoid}/>}
          <div className="container text-wrapper">
            <div className="row">
              <div className="avoid-intro col-6">
                <h3 className="smaller-section-title">Professions to avoid x 3</h3>
                <p className="section-descrip">Tell us which professions you'd rather avoid in your Meeows.</p>
              </div>
              <div className="avoid-profession col-2">
                <h3 className="smaller-section-title">Avoid Profession 1</h3>
                <p>Profession 1</p>
              </div>    
              <div className="avoid-profession col-2">
                <h3 className="smaller-section-title">Avoid Profession 2</h3>
                <p>Profession 1</p>
              </div> 
              <div className="avoid-profession col-2">
                <h3 className="smaller-section-title">Avoid Profession 3</h3>
                <p>Profession 1</p>
              </div>
            </div>
          </div>
        </div>
    )
}