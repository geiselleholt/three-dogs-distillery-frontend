import "./CancelOrder.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";

const ThankYou = () => {
  return (
    <div>
              <h1 className="home__header">
          <motion.div
          animate={{rotate: 360}}
          transition={{ repeat: 2, duration: 3}}
          >
            <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
          </motion.div>
          <p className="title">Three Dog's Distillery</p>
          <section className="header__buttons">
        <section>
          <a href="/">
            <button className="buttons">Home</button>
          </a>
        </section>
          </section>  
        </h1>
        <p className="message">
      Thank You for Your Order!! Your reciept and order confirmation will be sent to your email. Enjoy your custom made Spirit! Drink responsibly 🥃
      </p>
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
        </footer>
    </div>
  );
};

export default ThankYou;