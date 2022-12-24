import React from "react";
import { useNavigate } from "react-router-dom";
//import ContentLoader from "react-content-loader";
import "./Menu.css";
import useMenus from "../../hooks/useMenus";

const Menu = (props) => {
   const { bgColor, fgColor } = props;
   const { _id, image, name, description, price } = props.menu;
   const [menus] = useMenus();
   const history = useNavigate();

   const handleDetails = (id) => {
      const url = `/menu/${id}`;
      history(url);
   };

   return (
      <div className="col-sm-6 col-lg-4 text-center mx-auto">
         
          
            <div onClick={() => handleDetails(_id)} className="menu-box">
               <div className="img-box">
                  <img className="img-fluid" src={image} alt="" />
                  {/* <img
                     className="img-fluid"
                     src={`data:image/png;base64,${image}`}
                     alt=""
                  /> */}
               </div>
               <div className="info">
                  <h5 className="name">{name}</h5>
                  <p>{description.slice(0, 80)}</p>
                  {props.children ? (
                     <span className="link">{props.children}</span>
                  ) : (
                     <h4 className="price">${price}</h4>
                  )}
               </div>
            </div>
         
      </div>
   );
};

export default Menu;
