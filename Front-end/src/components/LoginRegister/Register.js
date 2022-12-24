import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import googleIcon from '../../images/google1.png'
import './LoginRegister.css'

const Register = () => {
   const { register, handleSubmit, reset} = useForm();

   const location = useLocation();
   const history = useNavigate();


   return (
      <>
         
            <span>register here</span>
      
         <div className="login-section">
            <div className="container">
               <div className="row">
                  <div className="col">
                    
                     
                     <div className="form-box">
                        <h4>Signup to ehungry</h4>
                        <button //</div>onClick={signInWithGoogle} 
                        className="btn-black google-btn shadow-sm">
                           <img src={googleIcon} alt="" /> Sign up With Google</button>
                        <div className="divider">
                           <span>or Sign up with Email</span>
                        </div>
                        <form //</div>onSubmit={handleSubmit(onSubmit)} 
                        className="mb-0 text-start">
                           <div className="row">
                              <div className="form-group col-12">
                                 <input className="form-control" type="name" defaultValue="" {...register("displayName", { required: true })} placeholder="Name" />
                              </div>
                              <div className="form-group col-12">
                                 <input className="form-control" type="email" defaultValue="" {...register("email", { required: true })} placeholder="Email" />
                              </div>
                              <div className="form-group col-12">
                                 <input className="form-control" type="password" defaultValue="" {...register("password", { required: true })} placeholder="password" />
                              </div>
                           </div>
                           <button type="submit" className="btn-black">Register</button>
                        </form>
                        <p className="switcher">Already an user? <Link className="link" to="/login">Login</Link></p>
                     </div>
                     {
                       
                        <div className="text-center pre-loader">
                           <div className="spinner-border" role="status"></div>
                        </div>
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Register;



