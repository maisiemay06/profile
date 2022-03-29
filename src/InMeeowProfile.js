import React from "react";

export default function InMeeowProfile() {
    return (
        <div className="card in-meeow-profile">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>  
          <h3 className="section-title">In Meeow profile</h3>
          <p className="section-descrip"></p>
          <div className="card in-meeow-about">
            <h3 className="section-title">About</h3>
            <p className="section-descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo quibusdam officiis explicabo ut recusandae! Accusamus nesciunt, tempora quis perferendis non beatae maiores numquam delectus et sequi voluptatem eligendi animi!</p>
          </div>
          <div className="card in-meeow-service-skills">
            <h3 className="section-title">Services/Skills</h3>
            <ul className="services">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
            <ul className="skills">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
        </div>
    )
}