import React from "react";
import Customer from "./Customer";
import PropTypes from "prop-types";
import "./CustomerList.css";

const CustomerList = (props) => {
  return (
    <ul>
      {props.customerData.map((customer) => (
        <Customer
          key={customer.id}
          id={customer.id}
          user_name={customer.user_name}
          password={customer.password}
          is_admin={customer.is_admin}
          first_name={customer.first_name}
          last_name={customer.last_name}
          email={customer.email}
          phone_number={customer.phone_number}
          address={customer.address}
        />
      ))}
    </ul>
  );
};

CustomerList.propTypes = {
  customerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_name: PropTypes.string,
      password: PropTypes.string,
      is_admin: PropTypes.boolean,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      phone_number: PropTypes.string,
      address: PropTypes.string,
    })
  ),
};
export default CustomerList;