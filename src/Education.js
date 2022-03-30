import React from "react";
import holderImg from './imgs/holder-img.png';

export default function Education() {
    return (
        <div className="card education">
          <i class="fa-solid fa-plus add-btn add-btn-light"></i>
          <i class="fa-solid fa-pen-to-square edit-btn edit-btn-light"></i>
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