import React from "react";

export default function AvoidProfessions() {
    return (
        <div className="card avoid">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>  
          <div className="avoid-intro">
            <h3 className="smaller-section-title">Professions to avoid x 3</h3>
            <p className="section-descrip">Tell us which professions you'd rather avoid in your Meeows.</p>
          </div>
          <div className="avoid-profession">
            <h3 className="smaller-section-title">Avoid Profession 1</h3>
            <p>Profession 1</p>
          </div>    
          <div className="avoid-profession">
            <h3 className="smaller-section-title">Avoid Profession 2</h3>
            <p>Profession 1</p>
          </div> 
          <div className="avoid-profession">
            <h3 className="smaller-section-title">Avoid Profession 3</h3>
            <p>Profession 1</p>
          </div>
        </div>
    )
}