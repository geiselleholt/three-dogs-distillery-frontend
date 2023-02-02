import "./Contact.css";
import Userfront from "@userfront/react";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";

const ContactPage = () => {
  return (
    <div>
        <h1 className="home__header">
          <motion.div
          animate={{rotate: 360}}
          transition={{ repeat: 2, duration: 3}}
          >
            <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
          </motion.div>
          <p className="title">Three Dog's Distillery- Contact Nick</p>
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
              <a href="/orderpage">
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
      <section className="contact">
        <p>
          Call Nick at (720)-467-0390
        </p>
        <p>
          Email Nick at 3DogsDistilling@gmail.com
        </p>
        <p>
          Click {           <a href="/vieworder">
            <button className="buttons">View Order</button>
          </a> } to review your order or to see your order's updated status or 
          delvery date (must be logged in to view order)
        </p>
        <p> Nick is here for you 24-7 to answer questions about your current order or future orders</p>
      </section>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a className="links" href="/">
            <button className="buttons">Home</button>
          </a>
        </section>
        <section>
          <a href="/orderpage">
            <button className="buttons">Order Now</button>
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


export default ContactPage;