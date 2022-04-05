import React, { useState } from "react";
import EditInterests from "./EditInterests";
import '../styles/Interests.css';

export default function Interests() {
  const [isOpen, setIsOpen] = useState(false);

  function editInterests(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

    return (
        <div className="card main-card interests">
          <i className="fa-solid fa-pen-to-square edit-btn edit-btn-light" onClick={editInterests}></i>
          {isOpen && <EditInterests handleClose={editInterests} />}
          <div className="interests-info text-wrapper">
            <h3 className="section-title">Interests</h3>
            <ul>
              <li>Interest 1  X</li>
              <li>Interest 2  X</li>
              <li>Interest 3  X</li>
            </ul>
          </div>
        </div>
    )
}