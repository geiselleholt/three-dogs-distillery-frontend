import "./AgeVerification.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";

const AgeVerification = () => {

  return (
    <div>
      <h1 className="home__header">
        <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
        </motion.div>
        <p className="title">Welcome to Three Dog's Distillery- Custom Made Spirits </p>
      </h1>
    <div className="age">
      <section> Are you over 21 years old?
        <p className="honest">Be honest. We will find out and we will contact your parents. You don't want that smoke 🚫🤥</p>
        <a href="/home">
          <button className="age_buttons">
            Yes
          </button>
        </a>
        <a href="/not21">
          <button className="age_buttons">
            No
          </button>
        </a>
      </section>
    </div>
    </div>
  );
};

export default AgeVerification;