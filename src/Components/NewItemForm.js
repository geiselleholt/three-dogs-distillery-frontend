import React, { useState } from "react";
import PropTypes from "prop-types";
import NewItemForm from "./ComponentsCss/NewItemForm";

const NewItemForm = ({ addItemCallback }) => {
  const [itemData, setItemData] = useState({
    spirit_type: "",
    spirit_flavor: "",
    bottle_type: "",
    bottle_quantity: "",
    age_time: "",
  });

  const submItitemData = (e) => {
    e.preventDefault();

    addItemCallback(itemData);
    setItemData({
      spirit_type: "",
      spirit_flavor: "",
      bottle_type: "",
      bottle_quantity: "",
      age_time: "",
    });
  };

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submItitemData}>
      <section>
        <div>
          <label htmlFor="name">Spirit Type</label>
          <input
            name="spirit_type"
            id="spirit_type"
            value={itemData.spirit_type}
            onChange={handleChange}
            className={itemData.spirit_type.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Would You Like To A Flavor Infusion?</label>
          <input
            name="spirit_flavor"
            id="spirit_flavor"
            value={itemData.spirit_flavor}
            onChange={handleChange}
          />
          <label htmlFor="name">Bottle Type</label>
          <input
            name="bottle_type"
            id="bottle_type"
            value={itemData.bottle_type}
            onChange={handleChange}
            className={itemData.bottle_type.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">How Many Would You Like?</label>
          <input
            name="bottle_quantity"
            id="bottle_quantity"
            value={itemData.bottle_quantity}
            onChange={handleChange}
            className={itemData.bottle_quantity.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">How Long Would You Like It Aged?</label>
          <input
            name="age_time"
            id="age_time"
            value={itemData.age_time}
            onChange={handleChange}
          />
          <p className="required">* required</p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              itemData.spirit_type.length === 0
              || itemData.bottle_type.length === 0
              || itemData.bottle_quantity.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewItemForm.propTypes = {
  addItemCallback: PropTypes.func.isRequired,
};

export default NewItemForm;