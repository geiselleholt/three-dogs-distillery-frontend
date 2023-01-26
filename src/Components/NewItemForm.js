import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewItemForm.css";

const NewItemForm = ({ addItemCallback }) => {
  const [itemData, setItemData] = useState({
    title: "",
    owner: "",
  });

  const submtItemData = (e) => {
    e.preventDefault();

    addItemCallback(itemData);
    setItemData({ title: "", owner: "" });
  };

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submtItemData}>
      <section>
        <div className="new__item__fields">
          <label htmlFor="name">Item Name</label>
          <input
            name="title"
            id="title"
            value={itemData.title}
            onChange={handleChange}
            className={itemData.title.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Your Name</label>
          <input
            name="owner"
            id="owner"
            value={itemData.owner}
            onChange={handleChange}
            className={itemData.owner.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <p>
            Preview: {itemData.title} - {itemData.owner}
          </p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              itemData.title.length === 0 || itemData.owner.length === 0
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