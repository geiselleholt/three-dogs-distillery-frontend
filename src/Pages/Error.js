import './Error.css'
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";

const Error = () => {
  return (
    <div className="error">
      <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
      </motion.div>
      <p> We're sorry. You have reached a page that has been disconnected or is no longer in service. If you feel you've reached this page in error, please click Home and try your page again. This is a recording. Beeeeeep </p>
      <section>
        <a className="links" href="/home">Home</a>
      </section>
      <p> We're sorry. You have reached a page that has been disconnected or is no longer in service. If you feel you've reached this page in error, please click Home and try your page again. This is a recording. Beeeeeep </p>
      <section>
        <a className="links" href="/home">Home</a>
      </section>
      <p> We're sorry. You have reached a page that has been disconnected or is no longer in service. If you feel you've reached this page in error, please click Home and try your page again. This is a recording. Beeeeeep </p>
      <section>
        <a className="links" href="/home">Home</a>
      </section>
      <p> We're sorry. You have reached a page that has been disconnected or is no longer in service. If you feel you've reached this page in error, please click Home and try your page again. This is a recording. Beeeeeep </p> 
      <section>
        <a className="links" href="/home">Home</a>
      </section>
      <p> We're sorry. You have reached a page that has been disconnected or is no longer in service. If you feel you've reached this page in error, please click Home and try your page again. This is a recording. Beeeeeep </p>
      <section>
        <a className="links" href="/home">Home</a>
      </section>
      <p> We're sorry. You have reached a page that has been disconnected or is no longer in service. If you feel you've reached this page in error, please click Home and try your page again. This is a recording. Beeeeeep </p> 
      <section>
        <a className="links" href="/home">Home</a>
      </section>
    </div>
  );
};

export default Error;