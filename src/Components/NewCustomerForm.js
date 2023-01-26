import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCustomerForm.css";

const NewCustomerForm = ({ addCustomerCallback }) => {
  const [customerData, setCustomerData] = useState({
    title: "",
    owner: "",
  });

  const submitCustomerData = (e) => {
    e.preventDefault();

    addCustomerCallback(customerData);
    setCustomerData({ title: "", owner: "" });
  };

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitBustomerData}>
      <section>
        <div className="new__customer__fields">
          <label htmlFor="name">Bustomer Name</label>
          <input
            name="title"
            id="title"
            value={CustomerData.title}
            onChange={handleChange}
            className={customerData.title.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Your Name</label>
          <input
            name="owner"
            id="owner"
            value={customerData.owner}
            onChange={handleChange}
            className={customerData.owner.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <p>
            Preview: {customerData.title} - {customerData.owner}
          </p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              customerData.title.length === 0 || customerData.owner.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewCustomerForm.propTypes = {
  addCustomerCallback: PropTypes.func.isRequired,
};

export default NewCustomerForm;