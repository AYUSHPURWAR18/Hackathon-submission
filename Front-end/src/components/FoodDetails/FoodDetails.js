import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useMenus from "../../hooks/useMenus";
import "./FoodDetails.css";

const FoodDetails = () => {
   const [menus] = useMenus();
   const history = useNavigate();
   const [details, setDetails] = useState({});
   const [count, setCount] = useState(1);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();
   const { menuId } = useParams();
   //const { user } = useAuth();

   useEffect(() => {
      if (menus.length) {
         const matchedData = menus.find((menu) => menu._id === menuId);
         setDetails(matchedData);
      }
   }, [menus]);

   const { image, name, description, price } = details;

   const onSubmit = (data) => {
      data.image = image;
      data.menu = name;
      data.price = price;
      

      
         fetch(`http://localhost:8000/menu`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
         })
            .then((res) => res.json())
            .then((result) => {
               if (result.insertedId) {
                  history.push("/cart");
                  reset();
               }
            });
      
   };

   const focusInput = () => {
      document.getElementById("quantityInput").focus();
   };

   return (
      <>
         
            <span>food details</span>

         <div className="food-details">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5 col-md-6 mb-5 mb-md-0">
                     <div className="img-box">
                        <img className="img-fluid" src={image} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-1 d-none d-lg-block"></div>
                  <div className="col-lg-6 col-md-6">
                     <div className="info">
                        <h3 className="name">{name}</h3>
                        <h4 className="price">${price}</h4>
                        <p>{description}</p>
                     </div>
                     <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mb-0 text-start"
                     >
                        <div className="row">
                           <div className="form-group col-12">
                              <h5>Choose your platter</h5>
                              <div className="platter-box">
                                 <input
                                    type="radio"
                                    className="btn-check"
                                    id="option1"
                                    value="Medium"
                                    {...register("platter", { required: true })}
                                 />
                                 <label
                                    className="btn btn-outline-primary"
                                    htmlFor="option1"
                                 >
                                    Medium
                                 </label>
                                 <input
                                    type="radio"
                                    className="btn-check"
                                    id="option2"
                                    value="Large"
                                    {...register("platter", { required: true })}
                                 />
                                 <label
                                    className="btn btn-outline-primary"
                                    htmlFor="option2"
                                 >
                                    Large
                                 </label>
                                 <input
                                    type="radio"
                                    className="btn-check"
                                    id="option3"
                                    value="Regular"
                                    {...register("platter", { required: true })}
                                 />
                                 <label
                                    className="btn btn-outline-primary"
                                    htmlFor="option3"
                                 >
                                    Regular
                                 </label>{" "}
                                 <br />
                                 {errors.platter && (
                                    <span className="error">
                                       select your platter
                                    </span>
                                 )}
                              </div>
                           </div>
                           <div className="form-group col-12">
                              <h5>quantity</h5>
                              <div className="quantity-box input-group">
                                 <span
                                    onClick={() =>
                                       count > 1 && setCount(count - 1)
                                    }
                                    className="btn-inc-dec"
                                 >
                                    <span onClick={focusInput}>-</span>
                                 </span>
                                 <input
                                    value={count}
                                    id="quantityInput"
                                    {...register("quantity", {
                                       required: true,
                                    })}
                                 />
                                 {errors.quantity && (
                                    <span className="error">
                                       select quantity
                                    </span>
                                 )}
                                 <span
                                    onClick={() => setCount(count + 1)}
                                    className="btn-inc-dec"
                                 >
                                    <span onClick={focusInput}>+</span>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <button type="submit" className="btn-black">
                           Add to cart
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default FoodDetails;
