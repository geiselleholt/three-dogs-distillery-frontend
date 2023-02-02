import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewItemForm.css";

const NewItemForm = ({ addItemCallback }) => {
  const [itemData, setItemData] = useState({
    spirit: "",
    flavor: "",
    bottle_type: "",
    bottle_quantity: "",
  });

  const submitItemData = (e) => {
    e.preventDefault();

    addItemCallback(itemData);
    setItemData({
      spirit: "",
      flavor: "",
      bottle: "",
      quantity: "",
    });
  };

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitItemData}>
        <div className="order">
        <section className="spirit">
          <p className="titles">Choose Your Spirit</p>
          <p className="optional">*$100 per bottle- add $50 for Bourbon</p>
          <section className="pictures">
            <button
              name="spirit"
              id="spirit"
              value="Brandy"
              onClick={handleChange} 
              className="each__spirit">
              Brandy- made from all natural fruits, quality sugar, fermented for 2 weeks
            </button>
            <button
              name="spirit"
              id="spirit"
              value="Bourbon"
              onClick={handleChange}
              className="each__spirit">
              Bourbon- made from barley and rye, fermented for 30 days, Aged with chips for 60 days
            </button>
            <button 
              name="spirit"
              id="spirit"
              value="Whiskey"
              onClick={handleChange}
              className="each__spirit">
              Whiskey- made with barley, grains. Fermented for 30 days. Aged with chips for 30 days 
            </button>
            <button             
              name="spirit"
              id="spirit"
              value="Moonshine"
              onClick={handleChange}
              className="each__spirit">
              Moonshine- made with Corn, barley and yeast. Double distilled for smooth taste and quality
            </button>
            <button             
              name="spirit"
              id="spirit"
              value="Vodka"
              onClick={handleChange}
              className="each__spirit">
              Vodka- Made from wheat, rye or potato. Fermented for 30 days. Double distilled
            </button>
            </section>
          </section>
          <section className="spirit">
            <p className="titles">Choose Your Flavor</p>
            <p className="optional">*optional- add $50</p>
            <section className="pictures">
            <button
              name="flavor"
              id="flavor"
              value="Cherry"
              onClick={handleChange} 
              className="cherry">
              Cherry
            </button>
            <button
              name="flavor"
              id="flavor"
              value="Apple"
              onClick={handleChange}
              className="apple">
              Apple
            </button>
            <button 
              name="flavor"
              id="flavor"
              value="Citrus"
              onClick={handleChange}
              className="citrus">
              Citrus
            </button>
            <button             
              name="flavor"
              id="flavor"
              value="Watermelon Candy"
              onClick={handleChange}
              className="candy">
              Watermelon Candy
            </button>
            <button             
              name="flavor"
              id="flavor"
              value="Espresso"
              onClick={handleChange}
              className="espresso">
              Espresso
            </button>
            </section>
          </section>
          <section className="spirit">
            <p className="titles">Choose Your Bottle Type</p>
            <p className="optional">*add $25 for Fancy Bottle</p>
            <p className="optional">750ml bottles- 750ml total in minis</p>
            <section className="pictures">
            <button
              name="bottle"
              id="bottle"
              value="Fancy Bottle"
              onClick={handleChange} 
              className="fancy">
              Fancy
            </button>
            <button
              name="bottle"
              id="bottle"
              value="Standard Bottle"
              onClick={handleChange}
              className="standard">
              Standard
              </button>
            <button 
              name="bottle"
              id="bottle"
              value="Mason Jar"
              onClick={handleChange}
              className="mason">
              Mason Jar
            </button>
            <button             
              name="bottle"
              id="bottle"
              value="Mini Bottles"
              onClick={handleChange}
              className="mini">
              15 Mini Bottles
              </button>
            <button             
              name="bottle"
              id="bottle"
              value="Mini Mason Jars"
              onClick={handleChange}
              className="mini__mason">
              15 Mini Mason Jars
              </button>
            </section>
          </section>
          <section className="spirit">
          <label className="titles" htmlFor="name">Choose Your Quantity</label>
            <select
              className="select"
              name="quantity"
              id="quantity"
              value={itemData.quantity}
              onChange={handleChange}
          >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </section>
          <section className="preview">
            <p>YOUR ORDER:</p>
            <p>
              Spirit= {itemData.spirit}
            </p>
            <p>
              Flavor= {itemData.flavor}
            </p>
            <p>
              Bottle= {itemData.bottle}
            </p>
            <p>
              Quantity= {itemData.quantity}
            </p>
          </section>
        </div>
    </form>
  );
};

NewItemForm.propTypes = {
  addItemCallback: PropTypes.func.isRequired,
};

export default NewItemForm;