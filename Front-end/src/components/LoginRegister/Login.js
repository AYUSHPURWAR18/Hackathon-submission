import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import googleIcon from "../../images/google1.png";
import "./LoginRegister.css";

const Login = () => {
  
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   //const location = useLocation();
   const history = useNavigate();

   const onSubmit = (data) => {
     

      fetch(`http://localhost:8000/login`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
         // body: formData,
      })
         .then((res) => res.json())
         .then((result) => {
           
            alert("login successfully");
               console.log('login succesfull')
               history("/adknfije578895");
               reset();
            
         });
   };

   

   return (
      <>
         
            <span>login here</span>
       
         <div className="login-section">
            <div className="container">
                  
                     <div className="form-box">
                        <h4>login to ehungry</h4>
                       
                           <span> Sign in with Email</span>
                       
                        <form
                           onSubmit={handleSubmit(onSubmit)}
                           id="rowl" 
                        >
                           <div  id="rowl"  className="row">
                              <div className="form-group col-12">
                                 <input
                                    className="form-control"
                                    defaultValue=""
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    type="email"
                                 />
                                
                              </div>
                              <div className="form-group col-12">
                                 <input
                                    className="form-control"
                                    defaultValue=""
                                    {...register("password", {
                                       required: true,
                                    })}
                                    placeholder="password"
                                    type="password"
                                 />
                                
                              </div>
                           </div>
                           <button type="submit" className="btn-black">
                           login
                              
                           </button>
                        </form>
                        </div>
                     </div>
                     
                        
                    
                  
            </div>
        
      </>
   );
};

export default Login;
