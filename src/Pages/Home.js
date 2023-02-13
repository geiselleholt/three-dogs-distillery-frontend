import "./Home.css";
// import { push as Menu } from 'react-burger-menu';
import Userfront from "@userfront/react";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import red_table from "../images/red_table.jpg";
import moonshiining from "../images/moonshining.jpeg";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faTwitter, faYoutube, faTiktok, faInstagram  } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  const logoutUser = () => {
    Userfront.logout();
    toggleLoggedIn();
  }


  return (
    <div id="outer-container" >
      {/* <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
          <a className="burger__menu" href="/orderpage">Order Now</a>
          <a className="burger__menu" href="/login">Log In</a>
          <a className="burger__menu" href="/signup">Sign Up</a>
          <a className="burger__menu" href="/viewcart">View Cart</a>
          <a className="burger__menu" href="/aboutus">About Us</a>
          <a className="burger__menu" href="/contact">Contact Us</a>
          <a className="burger__menu" href="/vieworder">View Order</a>
      </Menu> */}
      {/* <main id="page-wrap"> */}
        <h1 className="home__header">
          <motion.div
          animate={{rotate: 360}}
          transition={{ repeat: 2, duration: 3}}
          >
            <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
          </motion.div>
          <p className="title">Welcome to Three Dog's Distillery- Custom Made Spirits </p>
          <section className="header__buttons">
            
          <span className="hello">{Userfront.tokens.accessToken ? `Hello ${Userfront.user.name}!` : ""}</span>
          <section>
            {Userfront.tokens.accessToken ? 
            <button 
              className="buttons" 
              onClick={logoutUser}>
              Log Out
            </button> 
            : <a href="/login">
                <button className="buttons">Log In
                </button>
              </a>}
          </section>

          <section>
              {Userfront.user.email === "guamgirl1213@gmail.com" &&
              <a href="/admin">
                <button className="buttons">Admin</button>
              </a>}
            </section>

            <section>
              {!Userfront.tokens.accessToken &&
              <a href="/signup">
                <button className="buttons">Sign Up</button>
              </a>}
            </section>
            <section>
              <a href="/orderpage">
                <button className="buttons">Order Now</button>
              </a>
            </section>
            {/* <section>
              <a href="/viewcart">
                <button className="buttons">View Cart</button>
              </a>
            </section> */}
          </section>  
        </h1>
        <section className="processes">
          <img className= "picture" alt="bottle" src={red_table}></img>
          <section className="intro">
          <p >
            Three Dog's Distillery lets you design your own custom made spirits!
          </p>
          <p>
            Choose from 5 different spirits and 5 optional flavor infusions. Then choose what kind
            of bottle you'd like and desgin you own custom made label with an optional message!
          </p>
          <p>
            You can make 100 mini bottles of your favorite flavor of vodka for your wedding with the date and a message for your guests. 
            </p>
            <p>
            Or for your Dad's birthday you can design him an aged bottle of Cherry Bourbon in a fancy bottle with his picture on the label.
            </p>
            <p>
            The possibilites are endless!
            </p>
          </section>
        </section>  
      <section className="how__to">
      <img className= "picture" alt="mason jar" src={moonshiining}></img>
      <section className="intro">
        <p >
           Nick is a true artisan and artist. He's been crafting his own spirits for over 20 years and he's finally
          fullfilling his dream of sharing his premium products with the world. 
        </p>
        <p>
          He handcrafts every bottle himself using his 
          tried and true methods. He's uses state of the art distilling equipment. He's dedicated to using only quality 
          ingredients. He ferments and ages to perfection to get a smooth even taste. 
        </p>
          <p>
          Order your bottle today!
        </p>
        </section>
      </section>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a href="/orderpage">
            <button className="buttons">Order Now</button>
          </a>
        </section>
        <section>
          <a href="/contact">
            <button className="buttons">Contact Nick</button>
          </a>
        </section>
        <section>
          <a href="/aboutus">
            <button className="buttons">About Us</button>
          </a>
        </section>
        {/* <section>
          <a href="/vieworder">
            <button className="buttons">View Order</button>
          </a>
        </section> */}
              <section>
            <a className="icons" href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a className="icons" href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a className="icons" href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a className="icons" href="https://youtube.com">
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
            <a className="icons" href="https://tiktok.com">
              <FontAwesomeIcon icon={faTiktok}/>
            </a>
        </section>
      </footer>
      {/* </main> */}
    </div>
  );
};

export default Home;