import React from 'react';
import PropTypes from 'prop-types';
// import './Customer.css';

const Customer = (props) => {
  return (
    <li>
      Hello {props.first_name}
    </li>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  user_name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  is_admin: PropTypes.bool.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Customer;