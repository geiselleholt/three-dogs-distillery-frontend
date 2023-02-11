import "./Not21.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";

const Not21 = () => {
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
    <div className="not21">
       Don't even try it kid 🙅 We don't sell to minors 🚱 Come back when you're 21 🚫🥃4U
    </div>
    </div>
  );
};

export default Not21;