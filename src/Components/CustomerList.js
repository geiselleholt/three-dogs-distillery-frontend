import React from "react";
import Customer from "./Customer";
import PropTypes from "prop-types";
import CustomerList from "./ComponentsCss/CustomerList";

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
      user_name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      is_admin: PropTypes.boolean.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })
  ),
};
export default CustomerList;