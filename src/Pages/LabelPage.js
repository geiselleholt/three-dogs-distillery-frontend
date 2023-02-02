import "./LabelPage.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import NewLabelForm from "../Components/NewLabelForm";

const Label = () => {
  return (
    <div>
      <h1 className="label__header">
        <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
        </motion.div>
        <p className="title">Three Dog's Distillery- Design Your Label</p>
        <section>
          <a className="links" href="/">
            <button className="buttons">Home</button>
          </a>
        </section>
        <section>
          <a className="links" href="/viewcart">
            <button className="buttons">View Cart</button>
          </a>
        </section>
        <section>
          <a className="links" href="/login">
            <button className="buttons">Log In</button>
          </a>
        </section>
        <section>
          <a className="links" href="/signup">
            <button className="buttons">Sign Up</button>
          </a>
        </section>
      </h1>
      <section>
        <p className="label__title">Customize Your Label</p>
        <section className="label__form">
        <NewLabelForm/>
        </section>
      </section>
      <footer className="label__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a href="/">
            <button className="buttons">Home</button>
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
        {/* <section>Follow Us Logos</section> */}
      </footer>
    </div>
  );
};

export default Label;