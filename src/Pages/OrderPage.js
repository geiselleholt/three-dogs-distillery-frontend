import "./OrderPage.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";

const Order = () => {
  return (
    <div>
      <h1 className="order__header">
        <motion.div
        animate={{rotate: 360}}
        transition={{ repeat: 2, duration: 3}}
        >
          <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
        </motion.div>
        <p className="title">Three Dog's Distillery Order Page</p>
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
      <section className="order">
        <p className="titles">Choose your Spirit- $100 each- add $50 for Bourbon</p>
        <section className="spirit">
          <button className="each__spirit">
            Brandy- made from all natural fruits, quality sugar, fermented for 2 weeks
          </button>
          <button className="each__spirit">
            Bourbon- made from barley and rye, fermented for 30 days, Aged with chips for 60 days
          </button>
          <button className="each__spirit">
            Whiskey- made with barley, grains. Fermented for 30 days. Aged with chips for 30 days
          </button>
          <button className="each__spirit">
            Moonshine- made with Corn, barley and yeast. Double distilled for smooth taste and quality
          </button>
          <button className="each__spirit">
            Vodka- Made from wheat, rye or potato. Fermented for 30 days. Double distilled
          </button>
        </section>
        <p className="titles">Choose your Flavor- add $50</p>
        <section className="spirit">
          <button className="cherry">Cherry </button>
          <button className="apple">Apple </button>
          <button className="citrus">Citrus </button>
          <button className="candy">Watermelon Candy </button>
          <button className="espresso">Espresso </button>
        </section>
        <p className="titles">Choose your Bottle- add $25 for Fancy Bottle</p>
        <section className="spirit">
          <button className="fancy">Fancy Bottle</button>
          <button className="standard">Standard Bottle</button>
          <button className="mason">Mason Jar</button>
          <button className="mini">15 Mini Bottles</button>
          <button className="mini__mason">15 Mini Mason Jars</button>
        </section>
        <p className="preview">
          Preview Your Order: Spirit=   Flavor=   Bottle=
        </p>
      </section>
      <section className="button">
        <a href="/label">
          <button className="label__button">
            Design Your Label
          </button>
        </a>
      </section>
      <footer className="order__footer">
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

export default Order;