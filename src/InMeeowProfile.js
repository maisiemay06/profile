import React from "react";

export default function InMeeowProfile() {
    return (
      <div className="card in-meeow-profile">
        <i class="fa-solid fa-pen-to-square edit-btn"></i> 
        <div className="container">
          <div className="in-meeow-head">
            <h3 className="section-title">In Meeow profile</h3>
            <p className="section-descrip">This info will be displayed in your rollover profile during Meeows.</p>
          </div>
          <div className="row">
            <div className="card col in-meeow-about">
              <h3 className="section-title">About</h3>
              <p className="section-descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo quibusdam officiis explicabo ut recusandae! Accusamus nesciunt, tempora quis perferendis non beatae maiores numquam delectus et sequi voluptatem eligendi animi!</p>
            </div>
            <div className="col-xs gap"></div>
            <div className="card col container in-meeow-service-skills">
            <h3 className="section-title">Services/Skills</h3>
              <div className="row">
                <ul className="services col">
                  <li>Service 1  X</li>
                  <li>Service 2  X</li>
                  <li>Service 3  X</li>
                </ul>
                <ul className="skills col">
                  <li>Skill 1  X</li>
                  <li>Skill 2  X</li>
                  <li>Skill 3  X</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}