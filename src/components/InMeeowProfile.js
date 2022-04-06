import React, { useState } from "react";
import EditInMeeow from "./EditInMeeow";
import '../styles/InMeeowProfile.css';


export default function InMeeowProfile() {
  const [isOpen, setIsOpen] = useState(false);
  
  function editInMeeow(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div className="card main-card in-meeow-profile">
      <i className="fa-solid fa-pen-to-square edit-btn" onClick={editInMeeow}></i> 
      {isOpen && <EditInMeeow handleClose={editInMeeow}/>}

      <div className="text-wrapper">
        <div className="in-meeow-head">
            <h3 className="section-title">In Meeow profile</h3>
            <p className="section-descrip">This info will be displayed in your rollover profile during Meeows.</p>
          </div>
        <div className="container-fluid card-deck">
          <div className="row">
            <div className="card col in-meeow-about">
              <h3 className="section-title">About</h3>
              <p className="section-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo quibusdam officiis explicabo ut recusandae! Accusamus nesciunt, tempora quis perferendis non beatae maiores numquam delectus et sequi voluptatem eligendi animi!</p>
            </div>
            <div className="card col container in-meeow-service-skills">
            <h3 className="section-title">Services/Skills</h3>
              <div className="row">
                <ul className="services col close-list">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>
                <ul className="skills col close-list">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}