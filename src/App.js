// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navigate from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import OrderPage from "./Pages/OrderPage";
import Label from "./Pages/LabelPage";
import ViewCart from "./Pages/ViewCart";
import ThankYou from "./Pages/ThankYou";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import ViewOrder from "./Pages/ViewOrder";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";

// const [loggedIn, setLoggedIn] = useState(False);


// const logInCustomer = (user_name) => {
//   setLoggedIn(loggedIn => loggedIn.map(customer => {
//     if(customer.user_name === user_name) {
//       return {...customer, loggedIn: !customer.loggedIn};
//     } else {
//       return customer;
//     }
//   }));
// };

export const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LogIn />
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/orderpage",
    element: <OrderPage/>,
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
