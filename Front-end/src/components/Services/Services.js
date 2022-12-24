import React from 'react';
import icon1 from '../../images/feature-icon-1.svg'
import icon2 from '../../images/feature-icon-2.svg'
import icon3 from '../../images/feature-icon-3.svg'
import './Services.css'

const Feature = () => {
   return (
      <div className="feature-section">
         <div className="containers">
            <div className="rows" id ="rows">
                  <div className="feature-box">
                     <div className="icon">
                        <img src={icon1} alt="" />
                     </div>
                     <h4>ORDER YOUR FOOD</h4>
                     <p>hungry is a restaurant site. <br /> With this you can order the food of your choice online.</p>
                  </div>
             
                  <div className="feature-box">
                     <div className="icon icon2">
                        <img src={icon2} alt="" />
                     </div>
                     <h4>FOOD ON TABLE</h4>
                     <p>hungry is a restaurant site. With this <br /> you can order the food of your choice online.</p>
                  </div>
              
                  <div className="feature-box">
                     <div className="icon icon3">
                        <img src={icon3} alt="" />
                     </div>
                     <h4>DELICIOUS RECEIPE</h4>
                     <p>hungry is a restaurant site. With this you can order <br />  the food of your choice online.</p>
                  </div>
               
            </div>
         </div>
      </div>
   );
};

export default Feature;