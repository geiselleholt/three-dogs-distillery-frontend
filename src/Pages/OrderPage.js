import "./OrderPage.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import NewItemForm from "../Components/NewItemForm";
import axios from "axios";
import { useState } from "react";
import Userfront from "@userfront/react";
import NewLabelForm from "../Components/NewLabelForm";


console.log(Userfront.user.email)

const Order = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [allLabelData, setAllLabelData] = useState([]);
  const [newItem, setNewItem] = useState({
    spirit: "",
    flavor: "",
    bottle: "",
    quantity: "",
    id: "",
  })

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };
  
  const logoutUser = () => {
    Userfront.logout();
    toggleLoggedIn();
  }        

  const addItemData = async (itemFormData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/items`,
      itemFormData
    );
    const newNewItem = (response.data.item)
    setNewItem(newNewItem)
  };

  const addLabel = async (labelData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/labels`,
      labelData
    );
    const newLabels = [...allLabelData];
    newLabels.push({ ...response.data.label });
    setAllLabelData(newLabels);
  };


  return (
    <div>
      <h1 className="home__header">
        <motion.div
          animate={{rotate: 360}}
          transition={{ repeat: 2, duration: 3}}
          >
            <img alt="spinning logo" src={ three_dogs_logo } width={170} height={120}/>
        </motion.div>
        <p className="title">Three Dog's Distillery- Order</p>
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
        {/* <section>
          <a href="/viewcart">
            <button className="buttons">View Cart</button>
          </a>
        </section> */}
        <section>
          <a className="links" href="/">
            <button className="buttons">Home</button>
          </a>
        </section>
      </section>  
    </h1>
    <section>
      <p className="item_title">DESIGN YOUR BOTTLE:</p>
      <NewItemForm
        addItemCallback={addItemData}
      />
    </section>
        <section className="label__form">
        <p className="label_title">DESIGN YOUR LABEL:</p>
        <NewLabelForm
        addLabelCallback={addLabel}
        item={newItem}
        />
        </section>
      <section className="button">
        <form action="https://three-dogs-backend.herokuapp.com/create-checkout-session" method="POST">
          <input type="hidden" name="itemId" value={newItem.id}/>
          <button className="label__button" type="submit">
            Checkout
          </button>
        </form>
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