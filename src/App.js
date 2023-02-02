import { Navigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/react";
import { motion } from "framer-motion";
import three_dogs_logo from "./images/three_dogs_logo.jpg";
import "./App.css";
import Home from "./Pages/Home";
import OrderPage from "./Pages/OrderPage";
import Label from "./Pages/LabelPage";
import ViewCart from "./Pages/ViewCart";
import ThankYou from "./Pages/ThankYou";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import ViewOrder from "./Pages/ViewOrder";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";

Userfront.init("7n879v6b");

const SignupForm = Userfront.build({
  toolId: "albombk",
});

const LoginForm = Userfront.build({
  toolId: "mlbdmll",
});


export const routes = [
  {
    path: "/",
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
    element: 
      <RequireAuth>
        <ViewOrder/>
      </RequireAuth>
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

function SignUp() {
  return (
    <div>
      <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
      </motion.div>
      <SignupForm />
      <section>
        <a className="links" href="/">
          <button className="buttons">Home</button>
        </a>
      </section>
    </div>
    
  );
}


function Login() {
  return (
    <div>
      <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
      </motion.div>
      <LoginForm />
      <section>
        <a className="links" href="/">
          <button className="buttons">Home</button>
        </a>
      </section>
    </div>
  );
}





function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}



//   function App() {
// }

// export default App;
