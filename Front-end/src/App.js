import "./App.css";

import { BrowserRouter as Router, redirect, Route, Routes } from "react-router-dom";
import FoodDetails from "./components/FoodDetails/FoodDetails";

import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
                       
                    
  import NotFound from "./components/NotFound/NotFound";
  import Dashboard from "./components/AdminPanel/Dashboard/Dashboard";
  import AddMenu from "./components/AdminPanel/AddMenu/AddMenu";

                                            
import { useState, useEffect } from "react";
import Main from "./components/Main/Main";
import MenuPage from "./components/MenuPage/MenuPage";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/AdminPanel/TopHeader/TopHeader";

function App() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   return (
      
        
            <>

               <Router>
               <TopHeader />
                  <redirect>
                     <Routes>
                     <Route exact path="/" element={ <Main />}>
                        
                     </Route>
                     <Route path="/home" element={ <Main />}>
                       
                     </Route>
                     <Route path="/menus"  element = {<MenuPage />}>
                       
                     </Route>
                     <Route path="/menu/:menuId" element =  {<FoodDetails />}>
                       
                     </Route>
                     <Route path="/login" element = {<Login />}>
                       
                     </Route>
                     <Route path="/register" element = {<Register />}>
                       
                     </Route>
                    
                                               
          <Route path="/adknfije578895" element = { <Dashboard />}>
                     </Route>
        <Route path="*" element = {<NotFound />}>
                                                  
          </Route>
                     
                     </Routes>
                  </redirect>
                  <Footer />
               </Router>
            </>
        
     
   );
}

export default App;
