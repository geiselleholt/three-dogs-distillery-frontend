import "./ItemPage.css";
import { motion } from "framer-motion";
import three_dogs_logo from "../images/three_dogs_logo.jpg";
import NewItemForm from "../Components/NewItemForm";
import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";


const getAllItemsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/items`
  );
  return response.data;
};



const Item = () => {
  const [itemsData, setItemsData] = useState([]);
  const [newItem, setNewItem] = useState([])

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setItemsData(items);
  };

  const addItemData = async (itemForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/items`,
      itemForm
    );
    const newItem = (response.data.item)
    const newItemData = [...itemsData];
    newItemData.push(newItem);
    setItemsData(newItemData);
    setNewItem(newItem)

    return getAllItems();
  };


  return (
    <div>
      {/* <Link to="/label/:id" state={{ item: newItem }} className="link">
        Item Link
      </Link> */}
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
      <NewItemForm
        addItemCallback={addItemData}
      />

      {/* <section className="button">
            <a href="/label">
              <button className="label__button">
                Design Your Label
              </button>
            </a>
      </section> */}
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

export default Item;