import "./Home.css";
// import { push as Menu } from 'react-burger-menu';
import Userfront from "@userfront/react";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import red_table from "../images/red_table.jpg";
import moonshiining from "../images/moonshining.jpeg";


const Home = () => {
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
          <p className="title">Welcome to Three Dog's Distillery</p>
          <section className="header__buttons">
            <section>
            <a href="/login">
              <button className="buttons">Log In</button>
            </a>
            </section>
            <section>
              <a href="/signup">
                <button className="buttons">Sign Up</button>
              </a>
            </section>
            <section>
              <a href="/itempage">
                <button className="buttons">Order Now</button>
              </a>
            </section>
            <section>
              <a href="/viewcart">
                <button className="buttons">View Cart</button>
              </a>
            </section>
            <section>
              <button className="buttons" onClick={Userfront.logout}>Log Out</button>
            </section>
          </section>  
        </h1>
        <section className="processes">
          <img alt="bottle" src={red_table}></img>
          <p>
            Three Dog's Distillery lets you design your own custom made spirits!
          </p>
          <p>
            Choose from 5 different spirits and 5 optional flavor infusions. Then choose what kind
            of bottle you'd like and desgin you own custom made label with an optional message!
          <p>
            You can make 100 mini bottles of your favorite flavor of vodka for your wedding with a message for your guests.
            Or you can make an aged bottle of Cherry Bourbon in a fancy botlle for your Dad's birthday. The possibilites are endless!
            </p>
          </p>
        <section>
          <a className="how_to_links" href="/itempage">
            <button className="buttons">Order Now</button>
          </a>
          </section>
          <section>
          <a className="how_to_links" href="/contact">
            <button className="buttons">Contact Nick</button>
          </a>
          </section>
        </section>  
      <section className="how__to">
      <img alt="mason jar" src={moonshiining}></img>
        <p>
           Nick is a true artisan and artist. He's been crafting his own spirits for over 20 years and he's finally
          fullfilling his dream of sharing his premium products with the world. He handcrafts every bottle himself using his 
          tried and true methods. He's uses state of the art distilling equipment. He's dedicated to using only quality 
          ingredients. He ferments and ages to perfection to get a smooth even taste. Order your bottle today!
        </p>
      </section>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a href="/itempage">
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
        <section>
          <a href="/vieworder">
            <button className="buttons">View Order</button>
          </a>
        </section>
        {/* <section>Follow Us Logos</section> */}
      </footer>
      {/* </main> */}
    </div>
  );
};

export default Home;