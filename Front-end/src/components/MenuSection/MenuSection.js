import React from "react";
import { useNavigate } from "react-router-dom";
import useMenus from "../../hooks/useMenus";
import Menu from "../Menu/Menu";
import "./MenuSection.css";

const MenuSection = () => {
   const [menus] = useMenus();
   const history = useNavigate();

   const handleClick = () => {
      history("/menus");
   };

   return (
      <div className="menu-section">
         <div className="container">
            <div className="header-text">
               <span>Fresh From hungry</span>
               <h1>OUR SPECIAL MENU</h1>
            </div>
            
            <div className="row">
               {menus.map((menu) => (
                  <Menu
                     menu={menu}
                     key={menu._id}
                     bgColor="#222222"
                     fgColor="#444444"
                     width ="20px"
                  ></Menu>
               ))}
            </div>
           
            <div className="bottom" id="bottom">
               <button onClick={handleClick} className="btn-orange">
                  view more
               </button>
            </div>
         </div>
      </div>
   );
};

export default MenuSection;
