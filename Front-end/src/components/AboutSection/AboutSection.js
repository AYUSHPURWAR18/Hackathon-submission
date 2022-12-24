import React from 'react';
import about from '../../images/about2.png';
import './AboutSection.css';

const AboutSection = () => {
   return (
      <div className="about-section">
         <div id='container1' className="container">
                  <div className="header-text" id='header'>
                     <span>Delicious Restaurant</span>
                     <h1>OUR SPECIALITY</h1>
                     <p>hungry is a restaurant site. With this you can order the food of your choice by sitting at you TABLE. Good quality , tasty and hygenic food is offered</p>
                  </div>
              
                  <div className="img-box" id='img'>
                     <img className="img-fluid" src={about} alt="" />
                  </div>
                  </div>
            </div>
        
   );
};

export default AboutSection;