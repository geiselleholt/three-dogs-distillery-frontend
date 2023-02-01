import { Navigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/react";
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
const PasswordResetForm = Userfront.build({
  toolId: "rankrnr",
});

// const LogoutButton = Userfront.build({
//   toolId: "orlbkln"
// });

export const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/reset",
    element: <PasswordReset />
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
      <SignupForm />
      <section>
        <a className="links" href="/">Home</a>
      </section>
    </div>
    
  );
}


function Login() {
  return (
    <div>
      <LoginForm />
      <section>
        <a className="links" href="/">Home</a>
      </section>
    </div>
  );
}


function PasswordReset() {
  return (
    <div>
      <PasswordResetForm />
      <section>
        <a className="links" href="/">Home</a>
      </section>
    </div>
  );
}

function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
      <section>
        <a className="links" href="/">Home</a>
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
