import React, { useState } from "react";
import PropTypes from "prop-types";
import NewOrderForm from "./ComponentsCss/NewOrderForm";

const NewOrderForm = ({ addOrderCallback }) => {
  const [orderData, setOrderData] = useState({
    delivery_date: "",
    status: "processing order",
  });

  const submitOrderData = (e) => {
    e.preventDefault();

    addOrderCallback(orderData);
    setOrderData({
      delivery_date: "",
      status: "processing order",
    });
  };

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitOrderData}>
      <section>
        <div>
          <label htmlFor="name">Update Delivery Date</label>
          <input
            name="delivery_date"
            id="delivery_date"
            value={orderData.delivery_date}
            onChange={handleChange}
          />
          <label htmlFor="name">Update Order Status</label>
          <input
            name="status"
            id="status"
            value={orderData.status}
            onChange={handleChange}
          />
          <p className="required">* required</p>
          <button
            className="submit__button"
            type="submit"
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