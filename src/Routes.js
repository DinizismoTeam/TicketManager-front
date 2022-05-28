import React, { useContext } from "react";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import AddEvento from "./Pages/AddEvento";
import BuyIngresso from "./Pages/BuyIngresso";

import { BrowserRouter as Router, Switch, Route, Navigate, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Context } from "./Context/contextAPI.js";


const R = () => {
  let {auth, loading} = useContext(Context);
  
  // function PrivateRoute({isPrivate,  ...rest}){
    
  //   console.log(auth);
  //   console.log(loading);
  //   if(loading){
  //     return <h1>loading</h1>
  //   }
  //   if(!auth && isPrivate){
  //     return <Navigate to="/" />
  //   }
  //   return <Route {...rest} />
  // }

    return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
         <Route path='/register' element={<Cadastro />} />
         {
           loading ? null : <Route path="/home" element={!auth ? <Navigate to="/" />: <Home /> } />
         }
         {
           loading ? null : <Route path="/addevento" element={!auth ?  <Navigate to="/" /> :  <AddEvento />} />
         }
                  {
           loading ? null : <Route path="/buy" element={!auth ? <Navigate to="/" />: <BuyIngresso /> } />
         }
        </Routes>
      </Router>

    );
  };
  
  export default R;