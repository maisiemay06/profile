import React, { useState } from "react";
import EditEducation from "./components/EditEducation";
import holderImg from '../imgs/holder-img.png';

export default function Education() {
const [isOpen, setIsOpen] = useState(false);

function editEducation(event) {
  event.preventDefault();
  setIsOpen(!isOpen);
}

    return (
        <div className="card main-card education">
          <i className="fa-solid fa-plus add-btn add-btn-light" onClick={editEducation}></i>
          <i className="fa-solid fa-pen-to-square edit-btn edit-btn-light" onClick={editEducation}></i>
          {isOpen && <EditEducation handleClose={editEducation} />}
          <div className="edu-content">
            <h3 className="section-title">Education</h3>
            <div className="edu-section">
              <img src={holderImg} alt="" className='edu-img'></img>
              <div className="edu-info">
                <ul>
                  <li className='edu-name'>Whitcliffe Mount Comprehensive School</li>
                  <li className='edu-date'>1988-1993</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}