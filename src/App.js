// import { useEffect, useState } from "react";
// import axios from "axios";
import {
  createRoutesFromElements,
  Route,
  // Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Order from "./Pages/Order";
import Label from "./Pages/Label";
import ViewCart from "./Pages/ViewCart";
import ThankYou from "./Pages/ThankYou";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import ViewOrder from "./Pages/ViewOrder";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";




  export const routes = [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <LogIn/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/order",
      element: <Order/>,
    },
    {
      path: "/label",
      element: <Label/>,
    },
    {
      path: "/viewcart",
      element: <ViewCart/>,
    },
    {
      path: "/thankyou",
      element: <ThankYou/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    {
      path: "/vieworder",
      element: <ViewOrder/>,
    },
    {
      path: "/admin",
      element: <Admin/>,
    },
    {
      path: "*" ,
      element: <Error/>,
    }
  ];

  function App() {
}


export default App;
