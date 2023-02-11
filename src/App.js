// import { Navigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/react";
import { motion } from "framer-motion";
import three_dogs_logo from "./images/three_dogs_logo.jpg";
import "./App.css";
import AgeVerification from "./Pages/AgeVerification";
import Not21 from "./Pages/Not21";
import Home from "./Pages/Home";
import Order from "./Pages/OrderPage";
import ThankYou from "./Pages/ThankYou";
import CancelOrder from "./Pages/CancelOrder";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
// import ViewOrder from "./Pages/ViewOrder";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";



export const routes = [
  {
    path: "/",
    element: <AgeVerification/>
  },
  {
    path: "/not21",
    element: <Not21/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/orderpage",
    element: <Order/>,
  },
  {
    path: "/thankyou",
    element: <ThankYou/>,
  },
  {
    path: "/cancelOrder",
    element: <CancelOrder/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  // {
  //   path: "/vieworder",
  //   element: 
  //     <RequireAuth>
  //       <ViewOrder/>
  //     </RequireAuth>
  // },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "*" ,
    element: <Error/>,
  }
];

function SignUp() {
  return (
    <div className="error">
      <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
      </motion.div>
      <SignupForm />
      <section>
        <a className="links" href="/home">
          <button className="buttons">Home</button>
        </a>
      </section>
    </div>
  );
}

// UserFront for OAth
Userfront.init("7n879v6b");

const SignupForm = Userfront.build({
  toolId: "albombk",
});

const LoginForm = Userfront.build({
  toolId: "mlbdmll",
});

function Login() {
  return (
    <div className="error">
      <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
      </motion.div>
      <LoginForm />
      <section>
        <a className="links" href="/home">
          <button className="buttons">Home</button>
        </a>
      </section>
    </div>
  );
}

// function RequireAuth({ children }) {
//   let location = useLocation();
//   if (!Userfront.tokens.accessToken) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
  
//   return children;
// }

