import "./Home.css";
import { bubble as Menu } from 'react-burger-menu';
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";


const Home = () => {
  return (
    <div>
      <div className="top">
        <h1 className="home__header">
          <section>
            Menu
            <Menu className="burger__button">
              <a href="/orderpage">Order Now</a>
              <a href="/login">Log In</a>
              <a href="/signup">Sign Up</a>
              <a href="/viewcart">View Cart</a>
              <a href="/aboutus">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/vieworder">View Order</a>
            </Menu>
          </section>
          <motion.div
          animate={{rotate: 360}}
          transition={{ repeat: 2, duration: 3}}
          >
            <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
          </motion.div>
          <section>
            <a className="links" href="/login">Log In</a>
          </section>
          <section>
            <a className="links" href="/signup">Sign Up</a>
          </section>
          <section>
          <a className="links" href="/orderpage">Order Now</a>
          </section>
          <section>
          <a className="links" href="/viewcart">Cart</a>
          </section>
        </h1>
        <section className="processes">
          <p>
            Three Dog's Distillery lets you design your own custom made spirits!
          </p>
          <p>
          Choose from 5 different spirits and 5 optional flavor infusions. Then choose what kind
            of bottle you'd like and desgin you own custom made label with an optional message!
          </p>
          <p>
            You can make 100 mini bottles of your favorite flavor of vodka for your wedding with a message for your guests.
            Or you can make an aged bottle of Cherry Bourbon in a fancy botlle for your Dad's birthday. The possibilites are endless!
          </p>
                  <section>
          <a href="/orderpage">Order Now</a>
          </section>
          <section>
          <a href="/viewcart">Contact Nick</a>
          </section>
        </section>
      </div>
      <section className="how__to">
        <p>
           Nick is a true artisan and artist. He's been making his own alchohol for over 20 years and he's finally
          fullfilling his dream of sharing his spirits with the world. He handcrafts every bottle himself using his 
          tried and true methods. He's uses state of the art distilling equipment. He's dedicated to using only quality 
          ingredients. He ferments and ages to perfection. Order your bottle today!
        </p>
      </section>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a className="links" href="/orderpage">Order Now</a>
        </section>
        <section>
          <a className="links" href="/contact">Contact Us</a>
        </section>
        <section>
          <a className="links" href="/aboutus">About Us</a>
        </section>
        <section>
          <a className="links" href="/vieworder">View Order</a>
        </section>
        <section>Follow Us Logos</section>
      </footer>
    </div>
  );
};

export default Home;