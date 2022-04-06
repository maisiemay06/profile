import React, { useState } from "react";
import EditServicesSkills from "./EditServicesSkills";
import '../styles/ServicesSkills.css';

export default function ServicesSkills() {
  const [isOpen, setIsOpen] = useState(false);
  
  function editServicesSkills(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

    return (
        <div className="card main-card services-skills">
          <i className="fa-solid fa-pen-to-square edit-btn edit-btn-light" onClick={editServicesSkills}></i>
          {isOpen && <EditServicesSkills handleClose={editServicesSkills}/>}
          <div className="container-fluid text-wrapper">
            <div className="row card-deck">
              <div className="services card col">
                <h3 className="section-title">Services</h3>
                <ul className="close-list">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                  <li>Service 4</li>
                  <li>Service 5</li>
                  <li>Service 6</li>
                  <li>Service 7</li>
                  <li>Service 8</li>
                  <li>Service 9</li>
                </ul>
              </div>
              <div className="skills card col">
                <h3 className="section-title">Skills</h3>
                  <ul className="close-list">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                    <li>Skill 5</li>
                    <li>Skill 6</li>
                    <li>Skill 7</li>
                    <li>Skill 8</li>
                    <li>Skill 9</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    )
}