import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewOrderForm.css";

const NeworderForm = ({ addOrderCallback }) => {
  const [orderData, setOrderData] = useState({
    title: "",
    owner: "",
  });

  const submitOrderData = (e) => {
    e.preventDefault();

    addOrderCallback(orderData);
    setOrderData({ title: "", owner: "" });
  };

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitOrderData}>
      <section>
        <div className="new__order__fields">
          <label htmlFor="name">Order Name</label>
          <input
            name="title"
            id="title"
            value={orderData.title}
            onChange={handleChange}
            className={orderData.title.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Your Name</label>
          <input
            name="owner"
            id="owner"
            value={orderData.owner}
            onChange={handleChange}
            className={orderData.owner.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <p>
            Preview: {orderData.title} - {orderData.owner}
          </p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              orderData.title.length === 0 || orderData.owner.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewOrderForm.propTypes = {
  addOrderCallback: PropTypes.func.isRequired,
};

export default NewOrderForm;