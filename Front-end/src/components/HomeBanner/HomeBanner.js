import React from 'react';
import  pizza1  from "../../images/pizza-banner-1.png";

import './HomeBanner.css'

const Home = () => {
   return (
      <div className="home-banner">
        
            <div  id='container' className="container">
                 
                     <div id='text' className="text">
                        <h1>HUNG<span>RY</span></h1>
                        <p>HEALTHY FOOD FOR HEALTHY BODY</p>
                     </div>
                  <div >
                     <img id='img' src={ pizza1}></img>
                  </div>
                  
               </div>
            </div>
       
   );
};

export default Home;
