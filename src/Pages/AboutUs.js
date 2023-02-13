import "./AboutUs.css";
import Userfront from "@userfront/react";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import nick from "../images/nick.jpeg";
import emma from "../images/emma.jpg";
import bandit2 from "../images/bandit2.jpeg";
import Brandie_Chris from "../images/Brandie_Chris.jpeg";
import bronco_bottles from "../images/bronco_bottles.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faTwitter, faYoutube, faTiktok, faInstagram  } from '@fortawesome/free-brands-svg-icons';


const AboutUs = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };
  
  const logoutUser = () => {
    Userfront.logout();
    toggleLoggedIn();
  }

  return (
    <div>
        <h1 className="home__header">
          <motion.div
          animate={{rotate: 360}}
          transition={{ repeat: 2, duration: 3}}
          >
            <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
          </motion.div>
          <p className="title">Three Dog's Distillery- About Us</p>
          <section className="header__buttons">
            
          <span className="hello">{Userfront.tokens.accessToken ? `Hello ${Userfront.user.name}!` : ""}</span>
          <section>
            {Userfront.tokens.accessToken ? 
            <button 
              className="buttons" 
              onClick={logoutUser}>
              Log Out
            </button> 
            : <a href="/login">
                <button className="buttons">Log In
                </button>
              </a>}
          </section>
            <section>
              {!Userfront.tokens.accessToken &&
              <a href="/signup">
                <button className="buttons">Sign Up</button>
              </a>}
            </section>
            <section>
              <a href="/orderpage">
                <button className="buttons">Order Now</button>
              </a>
            </section>
            {/* <section>
              <a href="/viewcart">
                <button className="buttons">View Cart</button>
              </a>
            </section> */}
            <section>
          <a className="links" href="/home">
            <button className="buttons">Home</button>
          </a>
        </section>
          </section>  
        </h1>
      <section className="about">
        <section className="dogs">
        <img alt="bottles" src={bronco_bottles}></img>
          About Three Dog's Distillery
          <p>Three Dog's Distillery is Nick's pride and joy. He is finally turning his long time interest
            in creating master class spirits into his dream business. Every bottle he makes is made with
            tender loving care using his tried and true methods. Order you custom made bottle today for
            yourself or your loved ones.
          </p>
        </section>
        <section className="nick">
          <img alt="nick" src={nick}></img>
          About Nick
          <p>Nick is a true artist. When he's not fermenting or aging or distilling, he's forging custom
            made knives for his friends and family. He is also a DJ and an acomplished dancer. Most nights
            you can find him in the kitchen cooking up gourmet meals for his family. He's worked in industrial
            bakeries as well as remodeling companies. There's no limit to his creativity and he brings it to
            every bottle he makes.
          </p>
        </section>
        </section>
        <section className="about__dogs">
        <section className="brandy">
        <img alt="brandie and chris" src={Brandie_Chris}></img>
          About Brandie Rae
          <p>Pictured with her beautiful mama Chris, also Nick's wife, Brandie is an well aged beauty.
            She had a little bit of an attitude but she can be nice and fun when she wants to be. Nick
            made a Whiskey just for her type. It tastes beautiful on the palate becasue it's aged to 
            perfection!
          </p>
        </section>
        <section className="bandit">
        <img alt="bandit" src={bandit2}></img>
          About Bandit
          <p>Bandit is playful and smart! He's fast and tough and is always ready 
            to chase a ball or pull a rope or find hidden toys. Nick created Bandit's
            Bourbon to be the same. Its smooth with hidden notes of flavor that will
            leave you feeling playful and fun! </p>

        </section>
        <section className="emma">
        <img alt="emma" src={emma}></img>
          About Emma
          <p>Emma is sweet and loves to eat! She was the runt of the litter 
            but she's grown- more wide than up- to be healthy and strong.
            Nick crafted Emma's Elixer with her traits in mind. A sweet and strong
            Brandy that will lift your spirits and your palate!</p>
        </section>
      </section>
      <footer className="home__footer">
        <section>
        <img alt="spinning logo" src={ three_dogs_logo } width={200} height={100}/>
        </section>
        <section>
          <a className="links" href="/home">
            <button className="buttons">Home</button>
          </a>
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
        {/* <section>
          <a href="/vieworder">
            <button className="buttons">View Order</button>
          </a>
        </section> */}
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
      {/* </main> */}
    </div>
  );
};

export default AboutUs;