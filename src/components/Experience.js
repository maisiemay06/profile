import React, { useState } from "react";
import EditExperience from "./EditExperience";
import holderImg from '../imgs/holder-img.png';
import '../styles/Experience.css';

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  function editExperience(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

    return (
        <div className="card main-card experience">
          <i className="fa-solid fa-plus add-btn add-btn-light" onClick={editExperience}></i>
          {isOpen && <EditExperience handleClose={editExperience} />}
          <div className="exp-content text-wrapper">
            <h3 className="section-title">Experience</h3>
            <div className="exp-section">
              <i className="fa-solid fa-pen-to-square edit-btn edit-btn-light" onClick={editExperience}></i>
              <img src={holderImg} alt="" className='exp-img'></img>
              <div className="exp-info">
                <ul>
                  <li className="exp-title">Founder</li>
                  <li>Meeow Ltd - Full Time</li>
                  <li>May 2020 - Present ● 9 mos</li>
                  <li>Cleckheaton, England, United Kingdom</li>
                </ul>
                <p className="section-descrip">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum, dolore voluptatum facere ducimus eligendi sequi quibusdam earum amet saepe, voluptates corporis. Rerum iure ipsa tempora, debitis sequi reiciendis minus?
                  Corrupti, nihil hic quas facilis, magnam recusandae culpa qui dolorem ratione ea numquam quam quibusdam quis aliquam deleniti! Delectus, aperiam rerum eius alias recusandae explicabo aliquam blanditiis cumque...
                  <a href='' className='see-more'>See more</a>
                </p>
              </div>
            </div>
            <hr />
            <div className="exp-section">
              <i className="fa-solid fa-pen-to-square edit-btn edit-btn-light" onClick={editExperience}></i>
              <img src={holderImg} alt="" className='exp-img'></img>
              <div className="exp-info">
                <ul>
                  <li className="exp-title">Founder</li>
                  <li>Meeow Ltd - Full Time</li>
                  <li>May 2020 - Present ● 9 mos</li>
                  <li>Cleckheaton, England, United Kingdom</li>
                </ul>
                <p className="section-descrip">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum, dolore voluptatum facere ducimus eligendi sequi quibusdam earum amet saepe, voluptates corporis. Rerum iure ipsa tempora, debitis sequi reiciendis minus?
                  Corrupti, nihil hic quas facilis, magnam recusandae culpa qui dolorem ratione ea numquam quam quibusdam quis aliquam deleniti! Delectus, aperiam rerum eius alias recusandae explicabo aliquam blanditiis cumque...
                  <a href='' className='see-more'>See more</a>
                </p>
              </div>
            </div>
            <hr />
            <div className="exp-section">
              <i className="fa-solid fa-pen-to-square edit-btn edit-btn-light" onClick={editExperience}></i>
              <img src={holderImg} alt="" className='exp-img'></img>
              <div className="exp-info">
                <ul>
                  <li className="exp-title">Founder</li>
                  <li>Meeow Ltd - Full Time</li>
                  <li>May 2020 - Present ● 9 mos</li>
                  <li>Cleckheaton, England, United Kingdom</li>
                </ul>
                <p className="section-descrip">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum, dolore voluptatum facere ducimus eligendi sequi quibusdam earum amet saepe, voluptates corporis. Rerum iure ipsa tempora, debitis sequi reiciendis minus?
                  Corrupti, nihil hic quas facilis, magnam recusandae culpa qui dolorem ratione ea numquam quam quibusdam quis aliquam deleniti! Delectus, aperiam rerum eius alias recusandae explicabo aliquam blanditiis cumque...
                  <a href='' className='see-more'>See more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}