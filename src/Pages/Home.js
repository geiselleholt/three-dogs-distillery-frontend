import "./Home.css";
import { bubble as Menu } from 'react-burger-menu';
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";


const Home = () => {
  return (
    <div>
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
            <a href="/vieworder">View Your Order</a>
          </Menu>
        </section>
        <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={300} height={200}/>
        </motion.div>
        <section>
          <a href="/login">Log In</a>
        </section>
        <section>
          <a href="/signup">Sign Up</a>
        </section>
        <section>
         <a href="/orderpage">Order Now</a>
        </section>
        <section>
         <a href="/viewcart">Cart</a>
        </section>
      </h1>
      <section className="processes">
        <p>Description of Processes</p>
      </section>
      <section className="how__to">
        <p>Description of Equipment</p>
      </section>
      <section className="ingredients">
        <p>Description of Ingredients</p>
      </section>
      <section className="equipment">
        <p> How to Order</p>
        <section>
         <a href="/orderpage">Order Now</a>
        </section>
        <section>
         <a href="/viewcart">Contact Nick</a>
        </section>
      </section>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a href="/orderpage">Order Now</a>
        </section>
        <section>
          <a href="/contact">Contact Us</a>
        </section>
        <section>
          <a href="/aboutus">About Us</a>
        </section>
        <section>
          <a href="/vieworder">View Your Order</a>
        </section>
        <section>Follow Us Logos</section>
      </footer>
    </div>
  );
};

export default Home;