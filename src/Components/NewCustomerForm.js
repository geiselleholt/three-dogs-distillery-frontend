import React, { useState } from "react";
import PropTypes from "prop-types";
import NewCustomerForm from "./ComponentsCss/NewCustomerForm";

const NewCustomerForm = ({ addCustomerCallback }) => {
  const [customerData, setCustomerData] = useState({
    user_name: "",
    password: "",
    is_admin: false,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
  });

  const submitCustomerData = (e) => {
    e.preventDefault();

    addCustomerCallback(customerData);
    setCustomerData({
      user_name: "",
      password: "",
      is_admin: false,
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
    });
  };

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitCustomerData}>
      <section>
        <div>
          <label htmlFor="name">Choose a User-Name</label>
          <input
            name="user_name"
            id="user_name"
            value={customerData.user_name}
            onChange={handleChange}
            className={customerData.user_name.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Choose a password</label>
          <input
            name="password"
            id="password"
            value={customerData.password}
            onChange={handleChange}
            className={customerData.password.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">First Name</label>
          <input
            name="first_name"
            id="first_name"
            value={customerData.first_name}
            onChange={handleChange}
            className={customerData.first_name.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Last Name</label>
          <input
            name="last_name"
            id="last_name"
            value={customerData.last_name}
            onChange={handleChange}
            className={customerData.last_name.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Email</label>
          <input
            name="email"
            id="email"
            value={customerData.email}
            onChange={handleChange}
            className={customerData.email.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Phone Number</label>
          <input
            name="phone_number"
            id="phone_number"
            value={customerData.phone_number}
            onChange={handleChange}
            className={customerData.phone_number.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Address</label>
          <input
            name="address"
            id="address"
            value={customerData.address}
            onChange={handleChange}
            className={customerData.address.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              customerData.user_name.length === 0 || customerData.password.length === 0
              || customerData.first_name.length === 0 || customerData.last_name.length === 0
              || customerData.email.length === 0 || customerData.phone_number.length === 0
              || customerData.address.length === 0
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