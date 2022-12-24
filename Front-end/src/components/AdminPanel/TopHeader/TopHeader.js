import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../../images/menu2.png';

import './TopHeader.css'

const TopHeader = () => {

   return (
      <header className="top-header ">
         <div className='head'>
         <Link className="logo" to="/home">
            <h3 className="logo"><span>e</span>hungry</h3>
         </Link>
         
        

       
            <div className="bt1">
            <Link className="logo" to="/login">
               <button  className="btn-orange" id='bt'>
                   Admin Login
               </button>
               </Link>
         </div>
         </div>
    </header>
   );
};

export default TopHeader;