import React, { useState } from "react";
import EditServicesSkills from "./EditServicesSkills";

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
          <div className="container">
            <div className="row">
              <div className="services card col">
                <h3 className="section-title">Services</h3>
                <ul>
                  <li>Service 1  X</li>
                  <li>Service 2  X</li>
                  <li>Service 3  X</li>
                  <li>Service 4  X</li>
                  <li>Service 5  X</li>
                  <li>Service 6  X</li>
                  <li>Service 7  X</li>
                  <li>Service 8  X</li>
                  <li>Service 9  X</li>
                </ul>
              </div>
              <div className="skills card col">
                <h3 className="section-title">Skills</h3>
                  <ul>
                    <li>Skill 1  X</li>
                    <li>Skill 2  X</li>
                    <li>Skill 3  X</li>
                    <li>Skill 4  X</li>
                    <li>Skill 5  X</li>
                    <li>Skill 6  X</li>
                    <li>Skill 7  X</li>
                    <li>Skill 8  X</li>
                    <li>Skill 9  X</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    )
}