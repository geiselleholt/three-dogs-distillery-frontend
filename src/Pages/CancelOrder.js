import "./CancelOrder.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faTwitter, faYoutube, faTiktok, faInstagram  } from '@fortawesome/free-brands-svg-icons';

const CancelOrder = () => {
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
          <a href="/home">
            <button className="buttons">Home</button>
          </a>
        </section>
          </section>  
        </h1>
        <p className="message">
      Your Order has been Canceled
      </p>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a href="/orderpage">
            <button className="buttons">Make Another Order</button>
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
    </div>
  );
};

export default CancelOrder;