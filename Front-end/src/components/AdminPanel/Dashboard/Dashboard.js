import React from "react";
import {  Route, Link, useMatch , redirect , Routes , BrowserRouter } from "react-router-dom";
import NotFound from "../../NotFound/NotFound";
import TopHeader from "../TopHeader/TopHeader";
//import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
import AddMenu from "../AddMenu/AddMenu";
import ManageMenus from "../ManageMenus/ManageMenus";
import ManageOrders from "../ManageOrders/ManageOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import TableBookings from "../TableBookings/TableBookings";
import ManageUsers from "../ManageUsers/ManageUsers";


const Dashboard = () => {
   //const { path, url } = useMatch();
   //const { logOut } = useAuth();

   return (
      <>
         

         <div className="container-fluid">
            <div className="row">
               <nav
                  id="sidebarMenu"
                  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
               >
                  <div className="position-sticky">
                     <ul className="nav flex-column">
                        <li className="nav-item">
                           <Link className="link" to={`/addMenu`}>
                              
                              Add Menu
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`/manageMenus`}>
                              
                              Manage Menus
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`/manageOrders`}>
                              
                              Manage Food Orders
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`/tableBookings`}>
                              
                              Manage Table Bookings
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`/manageUsers`}>
                             
                              Manage Users
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to={`/makeAdmin`}>
                             
                              Make Admin
                           </Link>
                        </li>
                        <li className="nav-item">
                           <span
                              className="link"
                              style={{ cursor: "pointer" }}
                             
                           >
                             
                              Logout
                           </span>
                        </li>
                     </ul>
                  </div>
               </nav>
               <main className="col-md-9 ms-sm-auto col-lg-10 p-0 main">
                  <h1>Dashboard</h1>
                  <AddMenu />
                  <ManageMenus />
                  <ManageOrders />
                  <TableBookings />
                  <ManageUsers />
                  <MakeAdmin />

                 
               </main>
               
            </div>
         </div>
      </>
   );
};

export default Dashboard;
