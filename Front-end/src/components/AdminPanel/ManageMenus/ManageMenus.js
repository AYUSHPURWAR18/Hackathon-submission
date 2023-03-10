import React, { useEffect, useState } from "react";

import "./ManageMenus.css";

const ManageMenus = () => {
   const [menus, setMenus] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8000/menu")
         .then((res) => res.json())
         .then((data) => setMenus(data));
   }, []);

   const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure you want to delete");
      if (proceed) {
         fetch(`http://localhost:8000/deletemenu/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  const remaining = menus.filter((menu) => menu._id !== id);
                  setMenus(remaining);
               }
            });
      }
   };

   return (
      <div className="manage-menus">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="menu-table">
                     <h4>manage all menus</h4>
                     <table className="table mb-0">
                        <thead>
                           <tr>
                              <th scope="col">Item</th>
                              <th scope="col">Item name</th>
                              <th scope="col">Description</th>
                              <th scope="col">Price</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {menus.map((menu) => (
                              <tr key={menu._id}>
                                 <td>
                                    <img
                                       className="img-fluid"
                                       src={menu.image}
                                       alt=""
                                    />
                                 </td>
                                 <td>
                                    <p>{menu.name}</p>
                                 </td>
                                 <td>
                                    <p>{menu.description}</p>
                                 </td>
                                 
                                 <td>
                                    <p>${menu.price}</p>
                                 </td>
                                 
                                 <td>
                                    <p>
                                       <button
                                          onClick={() => handleDelete(menu._id)}
                                          className="btn-black delete"
                                       >DELETE
                                          
                                       </button>
                                    </p>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ManageMenus;
