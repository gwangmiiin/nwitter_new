import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const Router = ({ isLoggedIn }) => {
  console.log(isLoggedIn)
    return(
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
          <Route path="/" element = {<Home />}/>
          ) : (
          <Route path="/" element = {<Auth />}/>
          )}
        </Routes>
      </BrowserRouter>
    )
}

export default Router